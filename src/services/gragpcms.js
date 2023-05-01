import { request, gql } from 'graphql-request'

// const graphQlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
// const graphQlApi = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgy7oxzn1p1u01umg4om85h3/master"
const graphQlApi = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgy7oxzn1p1u01umg4om85h3/master"

export const getCategories = async () => {
    const query = gql`
        query getCategoriesQuery {
            categoriesConnection {
                edges {
                  node {
                    name
                    image {
                      url
                      width
                      height
                      fileName
                    }
                  }
                }
              }
            }
        }
    `

    const results = await request(graphQlApi, query)
    return results.categoriesConnection.edges
}