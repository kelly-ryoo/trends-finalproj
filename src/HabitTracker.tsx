import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header'

const HabitTracker = () => {
  return (
    <Container className="ContainerWrap">
      <Row><Header head="Habit Tracker" subheaderItalics="✨ A place for you to track your habits and goals." subheaderNormal=""></Header></Row>
      <table id="simple-board">
        <tbody>
          <tr id="row0">
            <td id="cell0-0"></td>
            <td id="cell0-1"></td>
            <td id="cell0-2"></td>
          </tr>
          <tr id="row1">
            <td id="cell1-0"></td>
            <td id="cell1-1"></td>
            <td id="cell1-2"></td>
          </tr>
          <tr id="row2">
            <td id="cell2-0"></td>
            <td id="cell2-1"></td>
            <td id="cell2-2"></td>
          </tr>
        </tbody>
      </table>
    </Container>);
}

export default HabitTracker;