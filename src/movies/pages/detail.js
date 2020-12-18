import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import LayoutPage from '../component/layout';
import LoadingData from '../component/loading';
import { getDataFilmById } from '../service/api';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const DetailPage = () => {
    const { id } = useParams();
    // console.log(id,name)
    const [loadingDetail, setLoadingDetail] = useState(false);
    const [detailMovie, setDetailMovie] = useState({});

    useEffect(() => {
        const getDataMovie = async () => {
            setLoadingDetail(true);
            const data = await getDataFilmById(id);
            if (data) {
                setDetailMovie(data);
                setLoadingDetail(false);
            }
        }
        getDataMovie();
    }, [id]);


    if (loadingDetail) {
        return (
            <LayoutPage>
                <LoadingData />
            </LayoutPage>
        )
    }

console.log(detailMovie.images)
    return (

        <LayoutPage>
            <Row>
                <Col span={6}>
                    <Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<img alt={detailMovie.title} src={`https://image.tmdb.org/t/p/w300/${detailMovie.poster_path}`} />}
                    >

                        <Meta title={detailMovie.tagline} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={24}>
                            <h1>{detailMovie.title}</h1>
                            <p>{detailMovie.overview}</p>
                            <p>Vote rage: {detailMovie.vote_average}</p>
                            <p>Vote count: {detailMovie.vote_count}</p>

                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        {detailMovie.images !== undefined ? detailMovie.images.backdrops.map((item, index) =>(
                            <Col key={index} span={24}>
                                <Card
                                    hoverable
                                    bordered={false}
                                    style={{ width: 400 }}
                                    cover={<img alt={detailMovie.title} src={`https://image.tmdb.org/t/p/w400/${item.file_path}`} />}
                                >

                                </Card>
                            </Col>
                        )): null}
                        
                    </Row>
                </Col>

            </Row>
        </LayoutPage>
    )
}

export default React.memo(DetailPage);