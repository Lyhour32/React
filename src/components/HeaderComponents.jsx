const HeaderComponent = () => {
  return (
    <header
      style={{
        width: '100%',
        height: '120px',
        backgroundColor: "#fff",
      }}
    >
      <div
        className="header"
        style={{
          width: '90%',
          height: '100%',
          margin: 'auto',
          padding: '10px'
        }}
      >
        <img
          style={{ width: '100px' }}
          src="https://news.sabay.com.kh/img/logo.png"
          alt=""
        />
      </div>
    </header>
  );
};
export default HeaderComponent;
