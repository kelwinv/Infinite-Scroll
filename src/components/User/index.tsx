import { Container,Image } from "./styles";

type IUser = {
  name: string;
  phone: string;
  thumbnail: string;
};

export function User({ name, phone, thumbnail }: IUser) {
  return (
    <Container>
      <Image>
        <img src={thumbnail} alt={name} />
      </Image>
      <div>
        <h1>{name}</h1>
        <p>Phone: {phone}</p>
      </div>
    </Container>
  );
}
