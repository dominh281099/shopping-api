
import React, { useState } from 'react';
import LayoutPage from '../component/layout';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import { Input, Row, Col, Card, Pagination } from 'antd';
import { searchMovieByKeyword } from '../service/api';
import LoadingData from '../component/loading'

const { Meta } = Card;
const { Search } = Input;
const SearchPage = () => {
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [movies, setMovies] = useState([]);// bang mang vi se co nhieu film tra ve
    const [page, setPage] = useState(1); // Tim kiem co ca phan trang   
    const [totalItems, setTotalItems] = useState(0)
    const [key, setKey] = useState('');


    const getDataMovies = async (keyword = '', currentPage = 1) => {
        //console.log(keyword)
        setLoadingSearch(true);
        const data = await searchMovieByKeyword(keyword, currentPage);
        if (data) {
            setMovies(data.results);
            setTotalItems(data.total_results);
            setKey(keyword);

            if (page < 1) {
                setPage = 1;
            } else if (page > data.total_pages) {
                setPage(data.total_pages)
            }
            setLoadingSearch(false);
        }

    }

    const changePageInput = (event) => {
        const key = event.target.value;
        setKey(key);
    }


    if (loadingSearch && movies.length === 0) {
        return (
            <LayoutPage>
                <LoadingData />
            </LayoutPage>
        )
    }
    return (
        <LayoutPage>
            <Row>
                <Col span={12} offset={6}>
                    <Search placeholder="input search text"
                        onSearch={(val) => getDataMovies(val, page)}
                        enterButton
                        onChange={changePageInput}
                        value={key}
                    />
                </Col>
            </Row>

            <Row style={{ marginTop: '5px' }}>
                {movies.map((item, index) => (
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
                    </Col>
                ))}

            </Row>
            {movies.length !== 0 ? (
                <Row style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Col span={24}>
                    <Pagination
                        current={page}
                        total={totalItems}
                        pageSize={20}
                        onChange={(pages) => getDataMovies(key, pages)}
                    />

                    </Col>
                    
                </Row>
            ) : null}

        </LayoutPage>
    )
}
export default React.memo(SearchPage); 