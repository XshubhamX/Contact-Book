export const authCheck = (context) => {
  if (!context.isAuth) throw new Error("User is not authenticated");
};
