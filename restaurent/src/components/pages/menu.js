import React, { useState } from 'react'; 
import styled from 'styled-components';
import img5 from '../images/5.jpg' 

const foodItems = [
    {
        id: 1,
        FoodName: "Cheese Paratha",
        foodimg: require('../images/b1.jpg'),
        price: "250",
        type: "breakFast",
        des: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love."
    },
    {
        id: 2,
        FoodName: "Aloo Paratha",
        foodimg: require('../images/b2.jpg'),
        price: "200",
        type: "breakFast",
        des: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region."
    },
    {
        id: 3,
        FoodName: "Egg Paratha",
        foodimg: require('../images/b3.jpg'),
        price: "150",
        type: "breakFast",
        des: "Egg paratha recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Egg paratha is a kids' favorite, so i make it often for their after school snack. To make egg paratha, you can use ready paratha, roti or frozen paratha as well."
    },
    {
        id: 4,
        FoodName: "Daal Chawal",
        foodimg: require('../images/l1.jpg'),
        price: "400",
        type: "Lunch",
        des: "The most fascinating, fabulously fantastic and simple lightweight Pakistan’s most favorite dish, Daal Chawal Recipe (Daal Rice) is here at Sooperchef.pk. It’s simple, fast and delicious Pakistani Recipe."
      },
      {
        id: 5,
        FoodName: "Pakal Paneer",
        foodimg: require('../images/l2.jpg'),
        price: "400",
        type: "Lunch",
        des: "Palak Paneer is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce. This delicious creamy dish is made with fresh spinach leaves, paneer (firm cottage cheese), onions, tomatoes, herbs and spices."
      },
      {
        id: 6,
        FoodName: "Aloo Ghobi",
        foodimg: require('../images/l3.jpg'),
        price: "200",
        type: "Lunch",
        des: "Aloo Gobi ki Sabzi is a classic Pakistani dish of Potatoes and Cauliflower cooked in savory spices and garnished with chillies and cilantro."
      },
      {
        id: 7,
        FoodName: "Aloo Goshat",
        foodimg: require('../images/l4.jpg'),
        price: "200",
        type: "Lunch",
        des: "Aloo Gosht is a spicy, thick and creamy meat gravy that originates from Pakistani and North Indian cuisine. This gravy has potatoes cooked with lamb or mutton in a thick stew."
      },
      {
        id: 8,
        FoodName: "Banana Shakes",
        foodimg:require('../images/s1.jpg'),
        price: "150",
        type: "Shakes",
        des: "You need less than five minutes to make this easy banana smoothie. Use our simple recipe on its own or use it as a base for other smoothies."
      },
      {
        id: 9,
        FoodName: "Mango Shakes",
        foodimg: require('../images/s2.jpg'),
        price: "150",
        type: "Shakes",
        des: "Mango shake is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk."
      },
      {
        id: 10,
        FoodName: "Biryani",
        foodimg: require('../images/d1.jpg'),
        price: "600",
        type: "Dinner",
        des: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties."
      },
      {
        id: 11,
        FoodName: "Korma",
        foodimg:require('../images/d2.jpg'),
        price: "250",
        type: "Dinner",
        des: "Korma is a gravy dish that is usually made with yogurt, lots of nuts and spices. A Mughal era original, Chicken Korma is the perfect dinner party dish that is easy, quick and a no-fuss recipe."
      } 
];
const Menu = () => {
    const [filteredItems, setFilteredItems] = useState(foodItems); 
    const handleFilter = (type) => {
        if (type === 'All') {
            setFilteredItems(foodItems);
        } else {
            setFilteredItems(foodItems.filter(item => item.type === type));
        }
    };
  
    return (
        <Container> 
            <MenuTitle>Our Menu</MenuTitle>
            <Categories>
                <ul>
                    {['All', 'breakFast', 'Lunch', 'Shakes', 'Dinner'].map(category => (
                        <li key={category} onClick={() => handleFilter(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
            </Categories>
            <FoodContainer>
                {filteredItems.map(item => (
                    <FoodBox key={item.id}>
                        <Content>
                            <div className="c-image">
                                <img src={item.foodimg} alt={item.FoodName} />
                            </div>
                            <TNP>
                                <div className="header">
                                    <span className="title">{item.FoodName}</span>
                                    <span className="price">Rs {item.price}</span>
                                </div>
                                <div className="des">
                                    <p>{item.des}</p>
                                </div>
                            </TNP>
                        </Content>
                    </FoodBox>
                ))}
            </FoodContainer>
        </Container>
    );
};
 
const Container = styled.div`
    max-width: 100%;
    background-image: url(${img5});
    font-family: cursive;
`;

const MenuTitle = styled.div`
    // margin-top: 20px;
    text-align: center;
    font-size: 3rem;
    font-weight: 1000;
    color: #182433;
    background-color: aqua;
    border-radius: 40px;
    span {
        font-size: 2rem;
        font-weight: 700;
        width: 10%;
        color: #182433;
        border-bottom: 5px solid var(--golden);
    }
`;

const Categories = styled.div`
    text-align: center;
    color: white;
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
        margin-top: 10px;
    }
    li {
        margin: 10px;
        padding: 5px 10px;
        font-size: 1rem;
        border: 2px solid var(--golden);
        border-radius: 20px;
        color: var(--golden);
        cursor: pointer;
    }
    li:hover {
        background-color: aqua;
        color: black;
    }
`;

const FoodContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;

const FoodBox = styled.div`
    width: 600px;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9e9999;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 20px aqua;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px);
    }
    .c-image {
        width: 200px;
        height: 160px;
        border: 3px solid var(--golden);
        border-radius: 5px;
        overflow: hidden;
    }
    .c-image img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
    }
`;

const TNP = styled.div`
    margin-left: 20px;
    width: 400px;
    .header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dotted #182433;
        padding: 0px 5px;
    }
    .title {
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 2px;
    }
    .price {
        font-size: 1rem;
        font-weight: 800;
        color: var(--golden);
        word-spacing: 2px;
    }
    .des p {
        font-size: 1rem;
    }
`;

export default Menu;
