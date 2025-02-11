import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

interface Comuna {
  nombre: string;
  codigo_postal: string;
}

interface Region {
  nombre: string;
  numero: string;
  comunas: Comuna[];
}

export const GET = async (req: NextRequest) => {
  try {
    const filePath = path.join(process.cwd(), "db.json");
    const data = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(data);

    const { searchParams } = new URL(req.url);
    const postalCode = searchParams.get("postal_code");

    const filteredData = json.regiones;

    if (!postalCode) {
      return NextResponse.json(
        filteredData.flatMap(({ comunas }: Region) => 
          comunas.map(({ nombre, codigo_postal }: Comuna) => ({ nombre, codigo_postal }))
        )
      );
    }

    const result = filteredData
      .map((region: { comunas: Comuna[]; }) => ({
        ...region,
        comunas: region.comunas.filter((comuna) => comuna.codigo_postal === postalCode),
      }))
      .filter((region: { comunas: string | Comuna[]; }) => region.comunas.length > 0);

    return NextResponse.json(result);
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Error al leer el archivo db.json" },
      { status: 500 }
    );
  }
};
