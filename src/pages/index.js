import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    allPubListCsv {
      nodes {
        Ad_Copy_Deadline
        Closing_Date
        Issue
        Issue_Date
        Issue_Month
        Product
        Year
      }
    }
  }
`;

export default function Home({ data }) {
  const publicationNodes = data.allPubListCsv.nodes;

  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Ad Copy Deadline</th>
            <th>Closing Date</th>
            <th>Issue Date</th>
            <th>Issue Month</th>
            <th>Product</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {publicationNodes.map((node) => (
            <tr key={node.id}>
              <th>{node.Ad_Copy_Deadline}</th>
              <th>{node.Closing_Date}</th>
              <th>{node.Issue_Date}</th>
              <th>{node.Issue_Month}</th>
              <th>{node.Product}</th>
              <th>{node.Year}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
