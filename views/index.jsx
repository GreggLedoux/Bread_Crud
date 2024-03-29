const React = require('react')
const Default = require('./layouts/Default')

function Index({breads, title})  {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <ul>
          {
            breads.map((bread, index) => {
              return (
              <li key={bread.id}>
                <a href={`/breads/${bread.id}`}>
                  {bread.name}
                </a>
              </li>)
            })
          }
        </ul>
        
      </Default>
    )
  }

module.exports = Index
