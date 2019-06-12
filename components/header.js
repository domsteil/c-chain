import Link from 'next/link'

export default () => (
  <div className="headerItems">
  <br/>
    <Link href='/'>
      <a>Home</a>
    </Link>

    <Link href='/policies'>
      <a>Policies</a>
    </Link>

    <Link href='/encrypted'>
      <a>Decrypt</a>
    </Link>

    <Link href='/verify'>
      <a>Verify</a>
    </Link>

    <Link href='/explorer'>
      <a>Explorer</a>
    </Link>


    <style jsx>{`
      a {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-size: 11px;
        margin-right: 30px;
        padding-right: 70px;
        margin-right: 8px;
        color: #999;
        text-transform: uppercase;
        text-decoration: none;
      }

      .headerItems {
        padding-bottom: 8px;
        margin-bottom: 8px;
        margin-left: 700px;
      }


      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        .row {
          flex-direction: column;
          margin: -1.5rem 0;
        }
        .column {
          width: 100%;
          padding: 1.5rem 0;
          text-align: center;
          max-width: 350px;
        }

        .list {
          overflow-y: scroll;
          overflow-x: hidden;
          position: left;
          border-radius: 5px;
          box-shadow: 0 8px 28px 0 rgba(86,91,115,.15);
          text-align: left;
          align: left;
          margin-left: -38px;
          padding-left: 28px;
          padding-right: 28px;
          background-color: #FFFFFF;
          width: 390px;
          height: 500px;
        }

        .headerItems {
          display: none;
        }

    `}</style>
  </div>

)
