import Caramel from '../components/navbar/navbar'
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap';

function Contacts() {
    return (
        <>
            <Caramel />
            
        <div className='tu'>
            <h2>Pizza delicious</h2>
            <h3>Notre adresse</h3>
            <p> 123 rue de la paix, 75001 Paris</p>
            <p>75021 Paris</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis, expedita, perferendis repudiandae aliquam harum ipsam, laborum voluptas ullam voluptatibus reiciendis dicta magnam temporibus sit iusto sapiente libero. Odit, odio.
            </p>

        </div> 


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td colSpan={4}>Nos coordonnées</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Logo</td>
                        <td>Téléphone</td>
                        <td colSpan={2}>01 23 45 67 89 </td>
                    </tr>
                    <tr>
                        <td>Logo</td>
                        <td>Portable</td>
                        <td colSpan={2}>01 23 45 67 89 </td>
                    </tr>
                    <tr>
                        <td>Logo</td>
                        <td >Email</td>
                        <td colSpan={2}>contact.leo.pizza@gmail.com</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default Contacts