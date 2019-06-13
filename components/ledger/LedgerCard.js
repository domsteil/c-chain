import Container from '../container'
import LedgerHeader from './LedgerHeader';
import LedgerList from './LedgerList';


export default () =>
<Container center>
<section>
    <div className="ledgerCard">
    
    <LedgerHeader />
    <LedgerList />
      </div>
    <style jsx>{`

      .ledgerCard {
        overflow-y: scroll;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 8px 28px 0 rgba(86,91,115,.15);
        position: center;
        text-align: center;
        box-sizing: border-box;
        align: center;
        padding-left: 28px;
        padding-right: 28px;
        margin-top: 28px;
        margin-left: 28px;
        margin-right: 28px;
        background-color: #FFFFFF;
        width: 900px;
        height: 300px;
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

        .ledgerCard {
          overflow-y: scroll;
          background: #fff;
          border-radius: 5px;
          box-shadow: 0 8px 28px 0 rgba(86,91,115,.15);
          position: center;
          text-align: center;
          box-sizing: border-box;
          align: center;
          padding-right: 28px;
          margin-top: 28px;
          background-color: #FFFFFF;
          width: 250px;
          height: 300px;
      }
        

        
.archetype-form__container {
    background: 0 0;
    color: #0d112b;
    width: 100%;
    margin: 0 auto;
    text-align: left;
}
      }
    `}</style>
    </section>
    </Container>