import React from 'react'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext'
import config from '../config'
import './Note.css'
import PropTypes from 'prop-types'


export default class Note extends React.Component {
  static defaultProps = {
    onDeleteNote: () => { },
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.id

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(() => {
        this.context.deleteNote(noteId)
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, content, modified } = this.props
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          {name}
        </h2>
        <button
          className='Note__delete'
          type='button'
          aria-label='delete button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Note__content'>
          {content}
        </div>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(modified, 'DD MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
Note.propTypes = {
  NoteId: PropTypes.array,
}
