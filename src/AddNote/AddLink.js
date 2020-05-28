import React, { Component } from 'react'
import ClipitForm from '../ClipitForm/ClipitForm'
import ApiContext from '../ApiContext'
import config from '../config'
import './AddLink.css'

export default class AddLink extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const newLink = {
      name: e.target['link-name'].value,
      content: e.target['link-content'].value,
      category_id: e.target['link-category-id'].value,
      modified: new Date(),
    }
    fetch(`${config.API_ENDPOINT}/links`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newLink),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(link => {
        this.context.addLink(link)
        this.props.history.push(`/category/${link.category_id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { categories = [] } = this.context
    return (
      <section className='AddLinks'>
        <h2>Create a link</h2>
        <ClipitForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='link-name-input'>
              Name
            </label>
            <input type='text' id='link-name-input' name='link-name' />
          </div>
          <div className='field'>
            <label htmlFor='link-content-input'>
              Content
            </label>
            <textarea id='link-content-input' name='link-content' />
          </div>
          <div className='field'>
            <label htmlFor='link-category-select'>
              Category
            </label>
            <select id='link-category-select' name='link-category-id'>
              <option value={null}>...</option>
              {categories.map(category =>
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              )}
            </select>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add link
            </button>
          </div>
        </ClipitForm>
      </section>
    )
  }
}
