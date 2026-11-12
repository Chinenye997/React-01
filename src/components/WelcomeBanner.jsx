const WelcomeBanner = () => {

  const styles = {
    backgroundColor: "blue",
    color: "white",
    fontSize: "2rem",
    borderRadius: "20px",
    width: "fit-content",
    padding: "2rem 1rem"
  }
  return(
    <div style={styles}>
      <h1 style={{color: "gold"}}>Welcome to littleshop</h1>

      <p>Free delivery on orders over <span>$30</span></p>
    </div>
  )
}

export default WelcomeBanner;
