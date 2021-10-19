// import React from 'react';

// class CryptoData extends React.Component {
//   constructor() {
//     super();
//     this.state = { data: [], DataisLoaded: false };
//   }

//   componentDidMount() {
//     fetch('https://api.cryptonator.com/api/ticker/eth-usd')
//       .then((res) => res.json())
//       .then((json) => this.setState({ data: json, DataisLoaded: true }));
//   }

//   render() {
//     const { DataisLoaded, data } = this.state;
//     if (!DataisLoaded)
//       return (
//         <div>
//           <h1> Pleses wait some time.... </h1>
//         </div>
//       );
//     return (
//       <div className="App">
//         <h1> Fetch data from an api in react </h1>{' '}
//         {data.map((data) => (
//           <h2> Eth price: {data}</h2>
//         ))}
//       </div>
//     );
//   }
// }

// export default CryptoData;
