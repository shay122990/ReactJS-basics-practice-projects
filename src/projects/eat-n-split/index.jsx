import React from "react";
import styles from "./EatNSplit.module.css";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default function EatNSplit() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend,
      ),
    );

    setSelectedFriend(null);
  }

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <FriendsList
          friends={friends}
          onSelect={handleSelectFriend}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <div className={styles.actions}>
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
      </div>

      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form
      className={`${styles.form} ${styles.formSplitBill}`}
      onSubmit={handleSubmit}
    >
      <h2>Split the bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>🧍🏻 Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
        }
      />

      <label>👯 {selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>💳 Who is paying the bill?</label>

      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

function FriendsList({ friends, onSelect, selectedFriend }) {
  return (
    <ul className={styles.friendsList}>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelect, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={`${styles.friend} ${isSelected ? styles.selected : ""}`}>
      <img className={styles.avatar} src={friend.image} alt={friend.name} />

      <div className={styles.friendInfo}>
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (
          <p className={styles.red}>
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}

        {friend.balance > 0 && (
          <p className={styles.green}>
            {friend.name} owes you ${Math.abs(friend.balance)}
          </p>
        )}

        {friend.balance === 0 && (
          <p className={styles.neutral}>You and {friend.name} are even</p>
        )}
      </div>

      <Button onClick={() => onSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form
      className={`${styles.form} ${styles.formAddFriend}`}
      onSubmit={handleSubmit}
    >
      <label>👯‍♂️ Friend Name</label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>

      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add Friend</Button>
    </form>
  );
}
