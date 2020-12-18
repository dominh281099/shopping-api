import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import LayoutPage from '../component/layout';
import { getDataMoviesHomePage } from '../service/api';
import { Row, Col, Card, Pagination } from 'antd';
import LoadingData from '../component/loading';

const { Meta } = Card;

const HomePage = () => {
    const [loadingHome, setLoadingHome] = useState(false);
    const [listMovies, setListMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResult] = useState(0);

    useEffect(() => {
        const getDataMovie = async () => {
            setLoadingHome(true);
            const data = await getDataMoviesHomePage(page);
            if (data) {
                setListMovies(data.results);
                setTotalResult(data.total_results);
                setLoadingHome(false);
                // cap nhap lai page, dam bao page chay tu 1 => total page
                if (page < 1) {
                    setPage(1);
                } else if (page > data.total_pages) {
                    setPage(data.total_pages)
                }
            }
        }
        getDataMovie();
    }, [page]);

    const changePage = (pages) => {
        setPage(pages)
    }

    if (loadingHome || listMovies.length === 0) {
        return (
            <LayoutPage>
                <LoadingData />
            </LayoutPage>
        )
    }

    return (
        <LayoutPage>
            <h1>This is home page</h1>
            <Row style={{ marginTop: '5px' }}>
                {listMovies.map((item, index) => (
                    <Col span={4} key={index}>
                        <Link to={`/movie/${slugify(item.title)}~${item.id}`}>
                            <Card
                                hoverable
                                style={{ width: 200, marginRight: '20px', marginLeft: '20px', marginBottom: '10px' }}
                                cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} />}

                            >
                                <Meta title={item.title} />
                            </Card>
                        </Link>
                        {/* <Card
                            hoverable
                            style={{ width: 200, marginRight: '20px',marginLeft: '20px', marginBottom: '10px' }}
                            cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} />}

                        >
                            <Meta title={item.title} />
                        </Card> */}
                    </Col>
                ))}

            </Row>
            <Row style={{ textAlign: 'center', marginTop: '20px' }}>
                <Col span={24}>
                    <Pagination
                        current={page}
                        pageSize={20}
                        total={totalResults}
                        onChange={(pages) => changePage(pages)}
                    />
                </Col>
            </Row>
        </LayoutPage>
    )
}
export default React.memo(HomePage); 