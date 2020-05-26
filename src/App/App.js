import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkListNav from '../LinkListNav/LinkListNav'
import LinkPageNav from '../LinkPageNav/LinkPageNav'
import LinkListMain from '../LinkListMain/LinkListMain'
import LinkPageMain from '../LinkPageMain/LinkPageMain'
import AddCategory from '../AddCategory/AddCategory'
import AddLink from '../AddLink/AddLink'
import ApiContext from '../ApiContext'
import config from '../config'
import './App.css'


class App extends Component {
  state = {
    links: [],
    categories: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/links`),
      fetch(`${config.API_ENDPOINT}/categories`)
    ])
      .then(([linksRes, categoriesRes]) => {
        if (!linksRes.ok)
          return linksRes.json().then(e => Promise.reject(e))
        if (!categoriesRes.ok)
          return categoriesRes.json().then(e => Promise.reject(e))

        return Promise.all([
          linksRes.json(),
          categoriesRes.json(),
        ])
      })
      .then(([links, categories]) => {
        this.setState({ links, categories })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddCategory = category => {
    this.setState({
      categories: [
        ...this.state.categories,
        category
      ]
    })
  }

  handleAddLink = link => {
    this.setState({
      links: [
        ...this.state.links,
        link
      ]
    })
  }

  handleDeletelink = linkId => {
    this.setState({
      links: this.state.links.filter(link => link.id !== linkId)
    })
  }

  renderNavRoutes() {
    return (
      <>
        {['/', '/category/:category_id'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={LinkListNav}
          />
        )}
        <Route
          path='/link/:linkId'
          component={LinkPageNav}
        />
        <Route
          path='/add-category'
          component={LinkPageNav}
        />
        <Route
          path='/add-link'
          component={LinkPageNav}
        />
      </>
    )
  }

  renderMainRoutes() {
    return (
      <>
        {['/', '/category/:category_id'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={LinkListMain}
          />
        )}
        <Route
          path='/link/:linkId'
          component={LinkPageMain}
        />
        <Route
          path='/add-category'
          component={AddCategory}
        />
        <Route
          path='/add-link'
          component={AddLink}
        />
      </>
    )
  }

  render() {
    const value = {
      Links: this.state.links,
      categories: this.state.categories,
      addCategory: this.handleAddCategory,
      addLink: this.handleAddLink,
      deleteLink: this.handleDeleteLink,
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <nav className='App__nav'>
            {this.renderNavRoutes()}
          </nav>
          <header className='App__header'>
            <h1>
              <Link to='/'>Clip It</Link>
              {' '}
              <FontAwesomeIcon icon='check-double' />
            </h1>
          </header>
          <main className='App__main'>
            {this.renderMainRoutes()}
          </main>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App
