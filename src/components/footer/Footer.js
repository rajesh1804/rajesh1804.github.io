import {Card} from 'react-bootstrap';
import {GitHub, LinkedIn, ArrowUpward} from '@material-ui/icons';

export default function Footer(){
  return(
    <Card.Footer style={{backgroundColor: 'rgb(236,249,254)'}}>
      <span style={{color: 'rgb(8,129,208)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
        <div>© Rajesh 2021😎</div>
        <div>
          <a href="https://github.com/rajesh1804" target="_blank" rel="noopener noreferrer"><GitHub /></a>
          <a href="https://in.linkedin.com/in/rajeshm99" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
          &nbsp;&nbsp;
          <a href="#home">
            <ArrowUpward
              style={{
                backgroundColor: 'rgb(8,129,208)',
                color: 'white',
                borderRadius: '20px',
                hover: {
                  color:'red'
                }
              }}
            />
          </a>
        </div>
      </span>
    </Card.Footer>
  )
}
