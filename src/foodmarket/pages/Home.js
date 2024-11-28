import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FoodCard from '../components/FoodCard.js';
import banner_bg from '../image/banner_bg.jpg';

function Home( {foods} ) {
    return (
        <div>
            <div className="main-bg" style={{ backgroundImage: 'url('+ banner_bg +')' }}></div>
            {/*
            1. css 이미지경로 (FoodMarket.css)

            2. js 에서는 import 후 사용
            <img src={banner_bg}/>

            3. public 폴더에 저장후 사용
            img src={'/food1.jpg}
            img src={process.env.PUBLIC_URL + '/food1.jpg'}
                    // 권장 작성방법

            package.json 파일안에
            "homepage":"/newurlpath" (상세경로이름) (process.env.PUBLIC_URL)
            */}
            <br></br>
            <Container>
                <Row>
                    {
                        foods.map((food, index) => {
                            return (
                                <Col md={4} sm={2} key={index}>
                                    <FoodCard food={food} index={index} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home;