import LedgerCard from './ledger/LedgerCard';


export default () =>
<section>
<div className="row">
    <div className="column">
    <LedgerCard />
    </div>
      </div>
    <style jsx>{`
      .column {
        text-align: left
      }

      .vertical {
        align-left: 30px;
        height: 1200px;
      }

     .col-left {
        box-sizing: border-box;
        min-height: 100%;
        background: #233659;
        background: linear-gradient(135deg,#565b73,#233659);
        padding: 25px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
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