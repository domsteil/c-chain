import Link from 'next/link';
import Container from './container';




export default () => (
  <Container wide dark>
    <Container>
      <footer>
        <style jsx>
          {`
            footer {
              padding: 2rem 0 4rem;
              min-height: 400px;
            }
            a,
            p,
            .copyright {
              color: #8c8c8c;
            }
            h4 a {
              color: inherit;
            }
            a:hover {
              color: #efefef;
            }
            .copyright {
              margin-top: 3rem;
            }
            .copyright div {
              margin-top: 0.5rem;
            }
            .row {
              align-items: flex-start;
            }
            h4 {
              margin-bottom: 0.75rem;
            }
            p {
              margin-top: 0;
              margin-bottom: 0.25rem;
            }
            * + h4 {
              margin-top: 1rem;
            }
            // CSS only media query for mobile
            @media screen and (max-width: 640px) {
              footer .column {
                flex: 1 1 120px;
              }
              footer .row {
                flex-direction: row;
                flex-wrap: wrap;
              }
            }
          `}
        </style>
      </footer>
    </Container>
  </Container>
);