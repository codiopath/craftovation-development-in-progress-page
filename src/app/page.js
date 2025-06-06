import './page.css'

export default function Home() {
  return (
    <div className="main-container">

      <div className="content-container">
        <h1 className="title">In Progress</h1>
        <div className="image-container">
          <img src="/main_logo.png" alt="Under Construction" />
        </div>
        <p className="description">
          This page is currently under construction. Please check back later.
        </p>
        <p className="footer-text">
          Thank you for your patience!
        </p>

      </div>
      
    </div>
  );
}
