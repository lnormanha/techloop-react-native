import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  back: {
    fontSize: 16,
    fontWeight: "500",
    color: "blue",
    marginLeft: 10,
    marginTop: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
    marginTop: 10
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 6,
    alignSelf: "center",
    marginTop: 15
  },
  button: {
    width: "60%",
    height: 50,
    backgroundColor: "blue",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  }
});
