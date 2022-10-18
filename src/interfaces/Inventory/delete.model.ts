export interface IDelete {
    openModal: React.Dispatch<React.SetStateAction<boolean>>;
    productToDelete: {name: string; idUser: string;};
    allProducts?: any;
}