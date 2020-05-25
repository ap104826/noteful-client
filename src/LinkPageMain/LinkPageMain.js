import React from 'react'
import Link from '../Link/Link'
import ApiContext from '../ApiContext'
import { findLink } from '../links-helpers'
import './LinkPageMain.css'

export default class LinkPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteLink = linkId => {
    this.props.history.push(`/`)
  }

  render() {
    const { links=[] } = this.context
    const { linkId } = this.props.match.params
    const link = findLink(links, linkId) || { content: '' }
    return (
      <section className='LinkPageMain'>
        <Link
          id={link.id}
          name={link.name}
          modified={link.modified}
          onDeleteLink={this.handleDeleteLink}
        />
        <div className='LinkPageMain__content'>
          {link.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}
