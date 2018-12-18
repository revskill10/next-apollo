import {useStore} from 'easy-peasy'
import gql from 'graphql-tag'
import Query from 'kms-web-components/lib/lib/query'
import { Button } from 'antd';
const Websocket = () => {
  const websocketStatus = useStore(state => state.websocket.status)
  return <div>{websocketStatus}</div>
}

const testQuery = gql`
  query{
    sche_ages{
      id
      age_name
      from_month
      to_month
    }
  }
`


const testSubscription = gql`
  subscription {
    sche_ages{
      id
      age_name
      from_month
      to_month
    }
  }
`

const Page = () => {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Websocket />
      <Query
        query={testQuery}
        subscription={testSubscription}>
        {
          data => <div>{JSON.stringify(data)}</div>
        }
        </Query>
    </div>
  )
}

Page.getInitialProps = async ({apolloClient, fetchPolicy}) => {  
  await apolloClient.query({query: testQuery, ...fetchPolicy})    
}

export default Page
