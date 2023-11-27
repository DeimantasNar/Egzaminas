import info from "../components/info/info.js";
export async function addNewInfo(req, res) {
  const { name, secondName, registrationDate } = req.body;

  if (!name || !secondName) {
    return res.status(400).json({ message: "Name and second name required" });
  }

  try {
    const info = new info({
      name,
      secondName,
      registrationDate,
    });

    await info.save();

    res.json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getAllInfo(req, res) {
  try {
    const info = await Info.find({}, { __v: 0 });

    res.json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getInfoById(req, res) {
  const { id } = req.params;

  try {
    const info = await Info.findById(id);

    res.json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteInfo(req, res) {
  const { id } = req.params;

  try {
    const info = await Info.findById(id);

    if (!info) {
      return res.status(404).json({ message: "Info not found" });
    }

    await Info.findByIdAndDelete(id);

    res.status(204).json({ message: "Information deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateInfo(req, res) {
  const { id } = req.params;
  const { name, secondName, registrationDate } = req.body;

  if (!name || !secondName) {
    return res.status(400).json({ message: "Name and second name required" });
  }

  try {
    const info = await Info.findById(id);

    if (!info) {
      return res.status(404).json({ message: "Information not found" });
    }

    info.name = name;
    info.secondName = secondName;
    info.registrationDate = registrationDate;

    await info.save();

    res.json(info);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}