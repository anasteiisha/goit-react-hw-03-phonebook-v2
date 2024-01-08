import * as s from './ContactList.styled';

export const ContactList = ({ users, deleteContact }) => {
  return (
    <s.List>
      {users.map(contact => (
        <s.Items key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <s.Button onClick={() => deleteContact(contact.id)} type="button">
            Delete
          </s.Button>
        </s.Items>
      ))}
    </s.List>
  );
};
