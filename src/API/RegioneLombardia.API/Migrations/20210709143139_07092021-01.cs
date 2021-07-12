using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RegioneLombardia.API.Migrations
{
    public partial class _0709202101 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Applications",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdNotice = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Surname = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    Archived = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Applications", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Attachments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdNotice = table.Column<int>(nullable: false),
                    Filename = table.Column<int>(nullable: false),
                    Filesize = table.Column<int>(nullable: false),
                    Content = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attachments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Services",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Services", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Types",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Types", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Notices",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    IdType = table.Column<int>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    AvailablityStartDate = table.Column<DateTime>(nullable: false),
                    AvailablityEndDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Notices_Types_IdType",
                        column: x => x.IdType,
                        principalTable: "Types",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "NoticeCategories",
                columns: table => new
                {
                    IdNotice = table.Column<int>(nullable: false),
                    IdCategory = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_NoticeCategories_Categories_IdCategory",
                        column: x => x.IdCategory,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NoticeCategories_Notices_IdNotice",
                        column: x => x.IdNotice,
                        principalTable: "Notices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[,]
                {
                    { 1, null, "Cittadini" },
                    { 2, null, "Imprese" },
                    { 3, null, "Enti e operatori" },
                    { 4, null, "Concorsi pubblici" },
                    { 5, null, "In apertura" }
                });

            migrationBuilder.InsertData(
                table: "Notices",
                columns: new[] { "Id", "AvailablityEndDate", "AvailablityStartDate", "Code", "Description", "IdType", "Name" },
                values: new object[,]
                {
                    { 1, new DateTime(2021, 10, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 7, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "RLD12021019722", @"Possono partecipare al presente Avviso i Comuni in forma singola o associata (ad esempio i Consorzi di Comuni, le Unioni di Comuni e le Comunità Montane). Nel caso di presentazione in forma di Ufficio di Piano, l’Ente Capofila presenta la domanda assumendo la funzione di referente unico per tutti i Comuni aderenti all’Ambito; pertanto, tutti gli adempimenti relativi alla Misura sono in capo all’ente capofila ed è inibita la presentazione della domanda da parte del singolo Comune.

                I requisiti che devono possedere i Comuni sono i seguenti:

                Compartecipare alla spesa per i servizi per la prima infanzia (asili nido/micro-nidi) Per “compartecipazione alla spesa” si intende ogni risorsa attivata dal Comune per assicurare il funzionamento dei servizi per la prima infanzia, migliorarne la qualità/capacità di risposta ai bisogni delle famiglie o favorire l’accesso ai servizi da parte delle famiglie.
                Adottare agevolazioni tariffarie, differenziate in base all’ISEE, a favore delle famiglie, per la frequenza dei bambini ai servizi per la prima infanzia (asili nido/micro-nidi a titolarità pubblica o privati autorizzati).
                In relazione a tale requisito, si specifica che i Comuni con asili nido/micro-nidi comunali, che al momento della pubblicazione del presente Avviso non si siano già Deliberazione di approvazione delle Tariffe o Documento equivalente, dovranno necessariamente adottarlo prima della presentazione della domanda di adesione alla Misura.

                Essere titolari in forma singola o associata di nidi e/o micro-nidi pubblici e/o di avere sottoscritto convenzioni per l’annualità 2021-2022 per l’acquisto di posti in convenzione con asili nido e/o micro-nidi privati autorizzati.
                In relazione a tale requisito, si specifica che i Comuni con asili nido/micro-nidi privati autorizzati, che al momento della pubblicazione del presente Avviso non si siano già dotati di convenzione per l’acquisto dei relativi posti per l’annualità 2021-2022 dovranno necessariamente perfezionarla prima della presentazione della domanda di adesione alla Misura. La convenzione deve prevedere la copertura dell’intero anno educativo 2021-2022. Qualora la convenzione scada successivamente alla data di presentazione della domanda di adesione e prima del 31 luglio 2022, il Comune dovrà impegnarsi in fase di adesione a sottoscrivere alla scadenza della stessa una nuova convenzione, a copertura dell’anno educativo e alle medesime condizioni della convenzione in essere alla data di presentazione della domanda.

                Non aver applicato per l’annualità 2021-2022 aumenti di tariffe rispetto all’annualità 2020- 2021 ad eccezione delle seguenti fattispecie:
                adeguamenti della quota di retta a carico della famiglia con aumenti entro il 5%;
                arrotondamenti dell’importo della retta all’euro per eccesso o per difetto;
                aumenti delle rette per le fasce ISEE superiori a € 20.000,00;
                Saranno oggetto di specifica valutazione in fase di istruttoria le variazioni delle rette determinate al verificarsi delle seguenti fattispecie:
                cambio di gestione del servizio (per esempio, da pubblico a privato o viceversa);
                cambio delle modalità di calcolo delle rette (per esempio, da scaglioni ISEE a funzione lineare).", null, "Avviso per l’adesione dei Comuni alla misura Nidi Gratis - Bonus 2021-2022" },
                    { 3, new DateTime(2021, 7, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 7, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "RLO12021019946", "Apertura 07/07/2021, ore 11:00. Province: Como, Sondrio, Varese. Avviso a favore degli intermediari del commercio per la concessione di contributi pari al valore della tassa automobilistica pagata nel periodo tributario avente decorrenza nell’anno 2020 - Finestra 5", null, "Finestra 5, Province: Como, Sondrio, Varese - Avviso a favore degli intermediari del commercio" },
                    { 4, new DateTime(2021, 10, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 7, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "RLT12021020242", "In attuazione della d.G.R n. 4758/2021, Regione Lombardia favorisce il rinnovo del parco veicolare dei soggetti pubblici della Lombardia con veicoli di categoria M1, M2, N1 e N2 (art.47 del Codice della Strada - d.lgs. n. 285/92) a bassissime o zero emissioni destinati al trasporto di persone o di merci, privilegiando la demolizione di veicoli a benzina fino ad Euro 2/II incluso o diesel fino ad Euro 5/V incluso.", null, "Rinnova Veicoli Enti pubblici - Anno 2021" },
                    { 11, new DateTime(2021, 7, 19, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 6, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "RLAM2021020382", "Codice Identificativo Gara : C.I.G. CODICE CIG ZDD3258ACF – CODICE CUP E85C18000010008", null, "FEC 50/2021 Richiesta di preventivo" },
                    { 12, new DateTime(2021, 7, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 6, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "RLO12021019945", "Apertura 06/07/2021, ore 15:00. Province: Brescia. Avviso a favore degli intermediari del commercio per la concessione di contributi pari al valore della tassa automobilistica pagata nel periodo tributario avente decorrenza nell’anno 2020 - Finestra 4", null, "NUFinestra 4, Province: Brescia - Avviso a favore degli intermediari del commercioLL" },
                    { 14, new DateTime(2021, 7, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2021, 6, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "RLO12021019944", "Apertura 06/07/2021, ore 11:00. Province: Milano. Avviso a favore degli intermediari del commercio per la concessione di contributi pari al valore della tassa automobilistica pagata nel periodo tributario avente decorrenza nell’anno 2020 - Finestra 3", null, "Finestra 3, Province: Milano - Avviso a favore degli intermediari del commercio" }
                });

            migrationBuilder.InsertData(
                table: "Types",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Bando" },
                    { 2, "Manifestazione di Interesse" },
                    { 3, "Gare Beni e Servizi" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_NoticeCategories_IdCategory",
                table: "NoticeCategories",
                column: "IdCategory");

            migrationBuilder.CreateIndex(
                name: "IX_NoticeCategories_IdNotice",
                table: "NoticeCategories",
                column: "IdNotice");

            migrationBuilder.CreateIndex(
                name: "IX_Notices_IdType",
                table: "Notices",
                column: "IdType");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Applications");

            migrationBuilder.DropTable(
                name: "Attachments");

            migrationBuilder.DropTable(
                name: "NoticeCategories");

            migrationBuilder.DropTable(
                name: "Services");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Notices");

            migrationBuilder.DropTable(
                name: "Types");
        }
    }
}
