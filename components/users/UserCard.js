import Container from '../container'
import UserDetail from './UserDetail';
import UserHeader from './UserHeader';
import UserList from './UserList';
import useFetch from '../../components/useFetch';


export default () =>
<Container center>
<section>
    <div className="userCard">
    
    <UserHeader />
    <UserList />
      </div>
    <style jsx>{`

      .userCard {
          min-height: 184px;
          margin-bottom: 10px;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 4px;
          padding: 30px;
          border-radius: 8px;
          background: rgb(255, 255, 255);
      
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
    </Container>