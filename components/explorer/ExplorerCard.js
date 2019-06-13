import Container from '../container'
import ExplorerHeader from './ExplorerHeader';
import ExplorerList from './ExplorerList';
import PublicCard from '../public/PublicCard';
import LedgerCard from '../ledger/LedgerCard';

export default () =>
<Container center>
<section>
    <div className="explorerCard">
    
    <ExplorerHeader />
      </div>
    <style jsx>{`

      .explorerCard {

        position: center;
        text-align: center;
        box-sizing: border-box;
        align: center;
        padding-left: 28px;
        padding-right: 28px;
        margin-top: 28px;
        margin-left: -28px;
        margin-right: 28px;
        width: 940px;
        height: 650px;
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

        .explorerCard {

          position: center;
          text-align: center;
          box-sizing: border-box;
          align: center;
          margin-top: 28px;
          margin-left: -28px;
          margin-right: 28px;
          width: 100px;
          height: 150px;
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