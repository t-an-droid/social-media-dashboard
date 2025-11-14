import React from 'react';

const Calendar = ({ data }) => {
  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th>Content Title</th>
            <th>Date</th>
            <th>Platform</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>
                <span className={`platform-tag ${item.platform.toLowerCase()}`}>
                  {item.platform}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;