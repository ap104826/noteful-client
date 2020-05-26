import React, { Component } from 'react'
import ClipitForm from '../ClipitForm/ClipitForm'
import ApiContext from '../ApiContext'
import config from '../config'
import './AddCategory.css'

export default class AddCategory extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const category = {
      name: e.target['category-name'].value
    }
    fetch(`${config.API_ENDPOINT}/categories`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(category),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(category => {
        this.context.addCategory(category)
        this.props.history.push(`/category/${category.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <section className='AddCategory'>
        <h2>Create a Category</h2>
        <ClipitForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='category-name-input'>
              Name
            </label>
            <input type='text' id='category-name-input' name='category-name' />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add category
            </button>
          </div>
        </ClipitForm>
      </section>
    )
  }
}
