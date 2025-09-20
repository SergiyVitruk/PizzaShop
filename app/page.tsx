import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    id: 1,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 2,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 3,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 4,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 5,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 6,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 7,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 8,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 9,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 10,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 11,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 12,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Combos"
                items={[
                  {
                    id: 1,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 2,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 3,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 4,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 5,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 6,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 7,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 8,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 9,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 10,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 11,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                  {
                    id: 12,
                    name: "Cheeseburger pizza",
                    imageUrl:
                      "https://pizzaplace.com.ua/wp-content/uploads/2020/12/IMG_4834.jpg",
                    price: 5,
                    items: [{ price: 5 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
