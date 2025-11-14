import React from 'react';

const DataTable = ({ data }) => {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Post Title</th>
            <th>Likes</th>
            <th>Comments</th>
            <th>Shares</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.likes}</td>
              <td>{post.comments}</td>
              <td>{post.shares}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;