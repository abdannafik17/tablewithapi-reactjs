import React, { Component } from 'react'
import { className } from 'postcss-selector-parser';
import Axios from 'axios';
import TableBody from './components/TableBody'

class App extends Component {
  constructor() {
    /**
     * catatan :
     * tidak boleh get data dari api di constructor
     */
    
    super()
    this.state = {
      people: [],
      keyword: 'search disini'
    }
  }

  async getPeople () {
    try {
      this.setState({
        loading: true
      })

      const result = await Axios.get('https://swapi.co/api/people/')

      this.setState({
        loading: false
      })

      return result.data.results
    } catch (error) {
      this.setState({
        loading: 'error'
      })
    }
  }

  async componentDidMount () {
    // console.log(await this.callAPI())
    this.setState({
      people: await this.getPeople()
    })
  }

  render () {
    return (
      <div className="container">
        <h1>Stars Wars Character</h1>
        {
          this.state.loading && <p>Loading ...</p>
        }
        <div className="row">
          <TableBody 
            headers={['Name', 'Gender', 'Hair Color']}
            data={this.state.people}
          />
        </div>
      </div>
    )
  }


}

export default App;
