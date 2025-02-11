import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const GET = async (req: NextRequest) => {
  try {
    const filePath = path.join(process.cwd(), "db.json");
    const data = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(data);

    const { searchParams } = new URL(req.url);
    const region = searchParams.get("numero");

    let filteredData = json.regiones;

    if (!region) {
      return NextResponse.json(
        filteredData.map(({ nombre, numero }: { nombre: string; numero: string }) => ({
          nombre,
          numero,
        }))
      );
    }

    if (region) {
      filteredData = filteredData.filter((r: { numero: string; }) =>
        r.numero.toLowerCase() === region
      );
    }

    return NextResponse.json(filteredData);
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Error al leer el archivo db.json" },
      { status: 500 }
    );
  }
};
