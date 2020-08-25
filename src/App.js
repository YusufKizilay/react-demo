import React from 'react';
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"

// const App= () =>  {
//   return (
//       <div>
//         <Header/>
//         <MainContent/>
//         <Footer/>
//       </div>
//   )
// }

const App = () => {
  const firstName="Yusuf"
  const lastName="Kızılay"

  const styles = {
    color: "#8b0000",
    backgroundColor : "#FFFF00"
  }

  return (
    <h1 style={styles}>Hello {firstName} {lastName} </h1>
  )
}


export default App;
