import React from "react";
import f3 from "family-chart"; // npm i family-chart
import "./family-chart.css"; // create file 'family-chart.css' in same directory, copy/paste css from examples/create-tree

const card_dim = {w: 220,
          h: 70,
          text_x: 75,
          text_y: 15,
          img_w: 60,
          img_h: 60,
          img_x: 5,
          img_y: 5}

function customAddBtn(card_dim) {
  return (`
    <g class="customAddBtn" style="cursor: pointer">
      <g transform="translate(${card_dim.w-12},${card_dim.h-12})scale(.08)">
        <circle r="100" fill="#fff" />
        <g transform="translate(-50,-45)">
          <line
            x1="10" x2="90" y1="50" y2="50"
            stroke="currentColor" stroke-width="20" stroke-linecap="round"
          />
          <line
            x1="50" x2="50" y1="10" y2="90"
            stroke="currentColor" stroke-width="20" stroke-linecap="round"
          />
        </g>
      </g>
    </g>
  `)
}

function customAddBtnListener(store, props) {
  console.log(props.card)
  console.log(props.d)
}
export default class FamilyTree extends React.Component {
  cont = React.createRef();

  componentDidMount() {
    if (!this.cont.current) return;

    const store = f3.createStore({
        data: data(),
        node_separation: 250,
        level_separation: 150,
        custom_elements: [{el: customAddBtn(card_dim), lis: customAddBtnListener, query: ".customAddBtn"}],
      }),
      view = f3.d3AnimationView({
        store,
        cont: document.querySelector("#FamilyChart")
      }),
      Card = f3.elements.Card({
        store,
        svg: view.svg,
        card_dim: {
          w: 220,
          h: 70,
          text_x: 75,
          text_y: 15,
          img_w: 60,
          img_h: 60,
          img_x: 5,
          img_y: 5
        },
        card_display: [
          (d) => `${d.data["first name"] || ""}`,
          (d) => `${d.data["last name"] || ""}`,
          (d) => `${d.data["birthday"] || ""}`
        ],
        mini_tree: true,
        link_break: false,
        
      });

    view.setCard(Card);
    store.setOnUpdate((props) => view.update(props || {}));
    store.update.tree({ initial: true });

    function data() {
      return [
        {
          id: "0",
          rels: {
            spouses: ["ninapopova"],
            father: "0c09cfa0-5e7c-4073-8beb-94f6c69ada19",
            mother: "0fa5c6bc-5b58-40f5-a07e-d787e26d8b56",
            children: [
              "popovKonstantinViktorovich",
              "f626d086-e2d6-4722-b4f3-ca4f15b109ab"
            ]
          },
          data: {
            "first name": "Виктор ",
            "last name": "попов",
            birthday: "1939",
            avatar:
              "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg",
            gender: "M"
          }
        },
        {
          id: "ninapopova",
          data: {
            gender: "F",
            "first name": "Нина",
            "last name": "попова(Комарова)",
            birthday: "",
            avatar: ""
          },
          rels: {
            spouses: ["0"],
            children: [
              "popovKonstantinViktorovich",
              "f626d086-e2d6-4722-b4f3-ca4f15b109ab"
            ]
          }
        },
        {
          id: "0c09cfa0-5e7c-4073-8beb-94f6c69ada19",
          data: {
            gender: "M",
            "first name": "константин федорович",
            "last name": "",
            birthday: "",
            avatar: ""
          },
          rels: {
            children: ["0"],
            spouses: ["0fa5c6bc-5b58-40f5-a07e-d787e26d8b56"]
          }
        },
        {
          id: "0fa5c6bc-5b58-40f5-a07e-d787e26d8b56",
          data: {
            gender: "F",
            "first name": "?",
            "last name": "",
            birthday: "",
            avatar: ""
          },
          rels: {
            spouses: ["0c09cfa0-5e7c-4073-8beb-94f6c69ada19"],
            children: ["0"],
            father: "12a9bddf-855a-4583-a695-c73fa8c0e9b2",
            mother: "bd56a527-b613-474d-9f38-fcac0aae218b"
          }
        },
        {
          id: "popovKonstantinViktorovich",
          data: {
            gender: "M",
            "first name": "Константин Викторович",
            "last name": "п",
            birthday: "",
            avatar: ""
          },
          rels: {
            mother: "ninapopova",
            father: "0",
            spouses: ["popovaVera"],
            children: [
              "vityapopov98",
              "nadiapopova",
              "lilinpo"
            ]
          }
        },
        {
          id: "f626d086-e2d6-4722-b4f3-ca4f15b109ab",
          data: {
            gender: "M",
            "first name": "Максим",
            "last name": "",
            birthday: "",
            avatar: ""
          },
          rels: {
            mother: "ninapopova",
            father: "0"
          }
        },
        {
          id: "vityapopov98",
          data: {
            gender: "M",
            "first name": "Виктор",
            "last name": "",
            birthday: "",
            avatar: ""
          },
          rels: {
            mother: "popovaVera",
            father: "popovKonstantinViktorovich"
          }
        },
        {
          id: "popovaVera",
          data: {
            gender: "F",
            "first name": "Вера",
            "last name": "",
            birthday: "",
            avatar: ""
          },
          rels: {
            spouses: ["popovKonstantinViktorovich"],
            children: [
              "vityapopov98",
              "nadiapopova"
            ]
          }
        },
        {
          id: "nadiapopova",
          data: {
            gender: "F",
            "first name": "Надежда",
            "last name": "",
            birthday: "",
            avatar: ""
          },
          rels: {
            mother: "popovaVera",
            father: "popovKonstantinViktorovich"
          }
        },
        {
          id: "lilinpo",
          data: {
            gender: "F",
            "first name": "лиля",
            "last name": "попова",
            birthday: "",
            avatar: ""
          },
          rels: {
            mother: "popovaVera",
            father: "popovKonstantinViktorovich"
          }
        },
        {
          id: "12a9bddf-855a-4583-a695-c73fa8c0e9b2",
          data: {
            gender: "M",
            "first name": "Yvo",
            "last name": "",
            birthday: "",
            avatar: ""
          },
          rels: {
            children: ["0fa5c6bc-5b58-40f5-a07e-d787e26d8b56"],
            spouses: ["bd56a527-b613-474d-9f38-fcac0aae218b"]
          }
        },
        {
          id: "bd56a527-b613-474d-9f38-fcac0aae218b",
          data: {
            gender: "F",
            "first name": "Yva",
            "last name": "",
            birthday: "",
            avatar: ""
          },
          rels: {
            spouses: ["12a9bddf-855a-4583-a695-c73fa8c0e9b2"],
            children: ["0fa5c6bc-5b58-40f5-a07e-d787e26d8b56"]
          }
        }
      ];
    }
  }

  render() {
    return <div className="f3" id="FamilyChart" ref={this.cont}></div>;
  }
  
}









