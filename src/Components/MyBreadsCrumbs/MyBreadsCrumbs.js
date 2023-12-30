import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './MyBreadsCrumbs.css'
function MyBreadsCrumbs(props) {
  return (
    <Container>
      <Breadcrumb className='pt-5'>
      <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{props.activePage}</Breadcrumb.Item>
    </Breadcrumb>
    </Container>
  );
}

export default MyBreadsCrumbs;