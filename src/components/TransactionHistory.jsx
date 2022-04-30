

// {
//     "id": "1e0700a2-5183-4291-85cc-2065a036a683",
//     "type": "invoice",
//     "amount": "964.82",
//     "currency": "LRD"
//   },

export const TransactionHistory = ({id, type, amount, currency}) => {
    return (
        <table className="transaction-history" id={id}>
        <thead>
          <tr>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
          </tr>
        </thead>
      
        <tbody>
          <tr>
            <td>Invoice</td>
            <td>125</td>
            <td>USD</td>
          </tr>
          <tr>
            <td>Withdrawal</td>
            <td>85</td>
            <td>USD</td>
          </tr>
        </tbody>
      </table>
      );
  };

