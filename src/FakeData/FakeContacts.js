const DATA = [
  {
    id: "hasfdlkj234234",
    name: "Jon De Soula",
    phone: "+19095481103",
    nextAction: {
      task: "Heres the next action for this person. What get in touch",
      dueDate: "03/21/2021",
    },
    background: "Here's some info about this person",
    messages: [
      {
        message:
          "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        date: "1608943541000",
        direction: "sent",
      },
      {
        message:
          "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        date: "1586924798000",
        direction: "received",
      },
      {
        message:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
        date: "1604520405000",
        direction: "received",
      },
      {
        message:
          "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        date: "1613586065000",
        direction: "sent",
      },
      {
        message:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        date: "1607359283000",
        direction: "received",
      },
      {
        message:
          "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
        date: "1581151194000",
        direction: "sent",
      },
      {
        message:
          "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        date: "1597867281000",
        direction: "sent",
      },
      {
        message:
          "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        date: "1606984414000",
        direction: "received",
      },
      {
        message:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        date: "1596845111000",
        direction: "sent",
      },
      {
        message:
          "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        date: "1587694210000",
        direction: "received",
      },
      {
        message:
          "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        date: "1605692278000",
        direction: "received",
      },
      {
        message:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        date: "1600881779000",
        direction: "received",
      },
      {
        message:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        date: "1595372500000",
        direction: "received",
      },
      {
        message:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
        date: "1578509263000",
        direction: "sent",
      },
      {
        message:
          "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
        date: "1581727249000",
        direction: "sent",
      },
    ],
    notes: [
      { title: "Here is a note", date: "03/21/2021" },
      {
        title:
          "Double note. Here is a longer note. Have a look. Yes, its longer. Here is a longer note. Have a look. Yes, its longer",
        date: "03/21/2021",
      },
      { title: "Here is a note", date: "03/21/2021" },
      {
        title: "Here is a longer note. Have a look. Yes, its longer",
        date: "03/21/2021",
      },
      { title: "Here is a note", date: "03/21/2021" },
      {
        title: "Here is a longer note. Have a look. Yes, its longer",
        date: "03/21/2021",
      },
    ],
  },
  {
    id: "hasfdasdf23lkj234234",
    name: "Jim Smith",
    phone: "+19095481103",
    background: "Here's some info about this person",
    nextAction: {
      task: "Heres the next action for this person. What get in touch",
      dueDate: "03/21/2021",
    },
    messages: [
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message to erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message FROM erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
    ],
  },
  {
    id: "h22asfdlkj23423334555",
    name: "",
    phone: "+19095481103",
    messages: [
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message to erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message TO erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
    ],
    notes: [
      { title: "Here is a note", date: "03/21/2021" },
      {
        title: "Here is a longer note. Have a look. Yes, its longer",
        date: "03/21/2021",
      },
      { title: "Here is a note", date: "03/21/2021" },
      {
        title: "Here is a longer note. Have a look. Yes, its longer",
        date: "03/21/2021",
      },
    ],
  },
  {
    id: "hasgasgl33kj234234",
    name: "Fred Flinstone",
    phone: "+19095481103",
    messages: [
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message to erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message FROM erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
    ],
    notes: [],
  },
  {
    id: "jk09sdflkjasdf",
    name: "",
    phone: "+17143235581",
    messages: [
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message to erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message to erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
    ],
    notes: [
      { title: "Here is a note", date: "03/21/2021" },
      {
        title: "Here is a longer note. Have a look. Yes, its longer",
        date: "03/21/2021",
      },
      { title: "Here is a note", date: "03/21/2021" },
      {
        title: "Here is a longer note. Have a look. Yes, its longer",
        date: "03/21/2021",
      },
    ],
  },
  {
    id: "lksg9galksjdg-asdgks",
    name: "",
    phone: "+17143235581",
    nextAction: {
      task: "Heres the next action for this person. What get in touch",
      dueDate: "03/21/2021",
    },
    messages: [],
  },
  {
    id: "h22asfdlkj23423334555",
    name: "",
    phone: "+19095481103",
    messages: [
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message to erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message TO erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
    ],
    notes: [
      { title: "Here is a note", date: "03/21/2021" },
      {
        title: "Here is a longer note. Have a look. Yes, its longer",
        date: "03/21/2021",
      },
      { title: "Here is a note", date: "03/21/2021" },
      {
        title: "Here is a longer note. Have a look. Yes, its longer",
        date: "03/21/2021",
      },
    ],
  },
  {
    id: "hasgasgl33kj234234",
    name: "Fred Flinstone",
    phone: "+19095481103",
    messages: [
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message to erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message FROM erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
    ],
    notes: [],
  },
  {
    id: "jk09sdflkjasdf",
    name: "",
    phone: "+17143235581",
    messages: [
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message to erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
      {
        message: "This is a message from erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "received",
      },
      {
        message: "This is a message to erik. This is what it says. Alright",
        date: "March 21, 2021",
        direction: "sent",
      },
    ],
    notes: [
      { title: "Here is a note", date: "03/21/2021" },
      {
        title: "Here is a longer note. Have a look. Yes, its longer",
        date: "03/21/2021",
      },
      { title: "Here is a note", date: "03/21/2021" },
      {
        title: "Here is a longer note. Have a look. Yes, its longer",
        date: "03/21/2021",
      },
    ],
  },
  {
    id: "lksg9galksjdg-asdgks",
    name: "",
    phone: "+17143235581",
    nextAction: {
      task: "Heres the next action for this person. What get in touch",
      dueDate: "03/21/2021",
    },
    messages: [],
  },
];

export default DATA;
