import Table from "./Table";
import './Table.css'
const CurrencyTable = () => {
  const api1 = `https://v6.exchangerate-api.com/v6/ef348a2503423654211c871a/latest/USD`;
  const api2 = `https://v6.exchangerate-api.com/v6/ef348a2503423654211c871a/latest/CAD`;
  const api3 = `https://v6.exchangerate-api.com/v6/ef348a2503423654211c871a/latest/EUR`;
  const api4 = `https://v6.exchangerate-api.com/v6/ef348a2503423654211c871a/latest/INR`;
  const api5 = `https://v6.exchangerate-api.com/v6/ef348a2503423654211c871a/latest/JPY`;
  const api6 = `https://v6.exchangerate-api.com/v6/ef348a2503423654211c871a/latest/CHF`;
  const api7 = `https://v6.exchangerate-api.com/v6/ef348a2503423654211c871a/latest/AUD`;
  const head1 = 'USD';
  const head2 = 'CAD';
  const head3 = 'EUR';
  const head4 = 'INR';
  const head5 = 'JPY';
  const head6 = 'CHF';
  const head7 = 'CHF';
  return (
    <div className="table">
      <h1>Exchange Rates</h1>
      <div className="table-container">
      <table>
        <thead>
          <th>
            <td style={{color:"red"}}>Currency</td>
            <td style={{color:"red"}}>USD</td>
            <td style={{color:"red"}}>CAD</td>
            <td style={{color:"red"}}>EUR</td>
            <td style={{color:"red"}}>IND</td>
            <td style={{color:"red"}}>JPY</td>
            <td style={{color:"red"}}>CHF</td>
            <td style={{color:"red"}}>AUD</td>
          </th>
        </thead>
        <tbody>
          <Table API={api1} title={head1} />
          <Table API={api2} title={head2} />
          <Table API={api3} title={head3} />
          <Table API={api4} title={head4} />
          <Table API={api5} title={head5} />
          <Table API={api6} title={head6} />
          <Table API={api7} title={head7} />
        </tbody>
      </table>
    </div>
    </div>
  )
};

export default CurrencyTable;






