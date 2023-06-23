const React = require('react');

const Default = require('./layout/default')


function Index({breads}){
    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
            {/* {
              breads.map(bread => {
                return (
                    <li>
                        {bread.name}
                    </li>
                )
              })  
            } */}
            {
              breads.map((bread, index) => (
                    <li key={index}>
                        <a href={`/breads/${index}`}>
                        {bread.name}
                        </a>
                    </li>
                )
              ) 
            }
        </ul>
        {/* <p>I have {breads[1].name} bread</p> */}
      </Default>  
    )
}


module.exports = Index