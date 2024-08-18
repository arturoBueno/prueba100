import User from "../models/user";

export const GetAllUsers =  async (req, res) => {
    const users = await User.findAll();

    res.json(users);
};

export const GetUneUserById =  (req, res) => {
    const user = User.findOne({
        id: +req.params.id,
    });

    res.json(user);
};

export const CreateUser = async (req, res) => {
    const userToCreate = req.body;

    await User.create(userToCreate);

    res.status(201).json(userToCreate);
};

export const updateUser = async (req, res) => {
    await User.update(req.body, {
        where: {
            id: req.params.id,
        },
    });

    const userUpdated = await User.findOne({
        where: {
            id: +req.params.id,
        },
    });

    console.log(userUpdated);

    res.json(userUpdated);
};

export const deleteUser = async (req, res) => {
    const userToDelete = await User.findOne({
        where: {
            id: +req.params.id,
        },
    });

    await User.destroy({
        where: {
            id: +req.params.id,
        },
    });

    res.json(userToDelete);
}