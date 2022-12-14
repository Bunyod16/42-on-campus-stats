import React from "react";
import { Card, H1Style } from "../styles";
import { User } from "../../types";
import tw from "twin.macro";
import { getAllCurrentActiveUsers } from "../utils/service";

interface ICurrentActiveUserProps {
  className?: string;
}

const tmpUserList: User[] = [
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  },
  {
    login: "jatan",
    image:
      "https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265__480.jpg",
    id: "1",
  }
];

const UserStyle = tw.div`
  flex flex-col items-center
  [> img]:(rounded-full h-14 w-14 object-cover)
  [> p]:(text-sm)
`;

const UserGalleryStyle = tw.div`
  grid grid-cols-5 justify-between gap-4
`;

function CurrentActiveUser({ className }: ICurrentActiveUserProps) {
  const userGallery = tmpUserList.map((singleUser) => {
    return (
      <UserStyle>
        <img src={singleUser.image} width={50} height={50} alt="" />
        <p>{singleUser.login}</p>
      </UserStyle>
    );
  });

  return (
    <Card className={className}>
      <>
        <H1Style>Current Active Users</H1Style>
        <UserGalleryStyle>{userGallery}</UserGalleryStyle>
      </>
    </Card>
  );
}

export default CurrentActiveUser;
