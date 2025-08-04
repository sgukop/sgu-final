"use client";
import React, { useState, useEffect} from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
interface FormProps {
  style: string;
}
const AdmissionOpenForm: React.FC<FormProps> = ({ style }) => {
  //const [hydrated, setHydrated] = useState(false);
  //const randomString = Math.random().toString(36).slice(2,8);
  const [Name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [captcha, setCaptcha] = useState<string>("");
  const [captchaText, setCaptchaText] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);

  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);

  const refreshString = () => {
    setCaptchaText("");
    setCaptcha(Math.random().toString(36).slice(2,8));
  };
 
  /* const matchCaptcha = (event : React.FormEvent) => {
    event.preventDefault();
    if (captchaText === captcha) {
      setValid(false);
      setSuccess(true);
    } else {
      setValid(true);
      setSuccess(false);
    }
  };  */

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !Name ||
      !email ||
      !mobileNumber ||
      !city ||
      !state ||
      !course ||
      !captchaText ||
      !agree
    ) {
      toast.error("Please fill out all fields.", { position: "top-right" });
    } 
    if (captchaText != captcha) {
      setValid(true);
      setSuccess(false);
      toast.error("Captcha Not Matched", { position: "top-right" });
    } 
    else {
      // If the form is successfully submitted, show a success toast
      toast.success("Form submitted successfully!", { position: "top-right" });
      setName("");
      setEmail("");
      setMobileNumber("");
      setCity("");
      setState("");
      setCourse("");
      setCaptchaText("");
      setAgree(false);
    }
  };
  useEffect(() => {
    setCaptcha(Math.random().toString(36).slice(2,8));
    //setHydrated(true);
},[])
  return (
    <form
      className={`tl-5-new-admission-form ${style}`}
      style={{ marginTop: "60px" }}
      onSubmit={handleFormSubmit}
    >
      <h5 className="tl-5-new-admission-form-title">
        4 years Full-time Programme
      </h5>
      <h3 className="tl-5-new-admission-form-subtitle">
        Apply through SGU- All India DESIGN APTITUTE TEST
      </h3>
      <div className="row g-14">
        <div className="col-lg-12 col-sm-12 col-md-12 col-12">
          <label>
            Name <span className="required-sign">*</span>
          </label>
          <input
            type="text"
            name="applicant-first-name"
            id="tl-5-applicant-first-name"
            placeholder="Enter Name *"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-sm-12 col-12">
          <label>
            Email Address <span className="required-sign">*</span>{" "}
          </label>
          <input
            type="email"
            name="applicant-email"
            id="tl-5-applicant-email"
            placeholder="Enter Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-sm-12 col-12">
          <label>
            Mobile Number <span className="required-sign">*</span>{" "}
          </label>

          <PhoneInput
            country={"in"}
            enableSearch={true}
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(mobileNumber) => setMobileNumber(mobileNumber)}
          />
        </div>
        <div className="col-sm-6 col-12">
          <label>
            State <span className="required-sign">*</span>
          </label>
          <select
            name="applicant-state"
            id="tl-5-applicant-state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option className="optioooon-default" value="">
              Select State *
            </option>
            <option className="optioooon" value="Directly">
              Maharashtra
            </option>
          </select>
        </div>

        <div className="col-sm-6 col-12">
          <label>
            City <span className="required-sign">*</span>
          </label>
          <select
            name="applicant-city"
            id="tl-5-applicant-city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
           
            <option value="">Select City *</option>
            <option value="30648">Achalpur</option>
            <option value="30740">Aheri</option>
            <option value="30626">Ahmednagar</option>
            <option value="35002">Ahmedpur</option>
            <option value="30785">Ajara</option>
            <option value="30976">Akkalkot</option>
            <option value="30842">Akkalkuva</option>
            <option value="30881">Akluj</option>
            <option value="30641">Akola</option>
            <option value="30627">Akole</option>
            <option value="30642">Akot</option>
            <option value="30904">Alibag</option>
            <option value="30761">Amalner</option>
            <option value="35003">Ambad</option>
            <option value="30674">Ambajogai</option>
            <option value="30882">Ambegaon</option>
            <option value="30989">Ambernath</option>
            <option value="30675">Ambewadgaon</option>
            <option value="30750">Amgaon</option>
            <option value="30650">Amravati</option>
            <option value="30850">Anjaneri</option>
            <option value="30651">Anjangaon</option>
            <option value="30827">Ardhapur</option>
            <option value="30751">Arjuni</option>
            <option value="30742">Armori</option>
            <option value="35004">Arvi</option>
            <option value="35005">Ashti</option>
            <option value="30934">Atpadi</option>
            <option value="35006">Aundha Nagnath</option>
            <option value="30664">Aurangabad</option>
            <option value="35007">Ausa</option>
            <option value="31015">Babhulgaon</option>
            <option value="35008">Badnapur</option>
            <option value="35009">Balapur</option>
            <option value="30717">Balharshah</option>
            <option value="30883">Baramati</option>
            <option value="30977">Barshi</option>
            <option value="30643">Barsi Takli</option>
            <option value="35010">Basmat</option>
            <option value="30950">Bavada</option>
            <option value="30676">Beed</option>
            <option value="30762">Bhadgaon</option>
            <option value="30718">Bhadravati</option>
            <option value="35011">Bhamragarh</option>
            <option value="30686">Bhandara</option>
            <option value="30652">Bhatkuli</option>
            <option value="30884">Bhavaninagar</option>
            <option value="30688">Bhikarkheda</option>
            <option value="30990">Bhiwandi</option>
            <option value="30808">Bhiwapur</option>
            <option value="30828">Bhokar</option>
            <option value="35012">Bhokardan</option>
            <option value="30864">Bhoom</option>
            <option value="30763">Bhusawal</option>
            <option value="30786">Bhuye</option>
            <option value="30829">Biloli</option>
            <option value="30764">Bodwad</option>
            <option value="30697">Buldhana</option>
            <option value="35013">Chakur</option>
            <option value="30765">Chalisgaon</option>
            <option value="30743">Chamorshi</option>
            <option value="30787">Chandgad</option>
            <option value="30716">Chandrapur</option>
            <option value="30843">Chandsaili</option>
            <option value="30719">Chandur</option>
            <option value="30653">Chandur Bazar</option>
            <option value="30654">Chandur Railway</option>
            <option value="30851">Chandwad</option>
            <option value="30655">Chikhaldara</option>
            <option value="30698">Chikhli</option>
            <option value="30720">Chimur</option>
            <option value="30921">Chiplun</option>
            <option value="30766">Chopda</option>
            <option value="30991">Dahanu</option>
            <option value="30951">Dahiwadi</option>
            <option value="30922">Dapoli</option>
            <option value="31016">Darwha</option>
            <option value="30656">Daryapur Banosa</option>
            <option value="30885">Daund</option>
            <option value="30699">Deaulgaon Raja</option>
            <option value="30830">Degloor</option>
            <option value="35015">Deoni</option>
            <option value="35016">Desaiganj</option>
            <option value="30700">Deulgaon Mahi</option>
            <option value="30967">Devgad</option>
            <option value="30844">Dhadgaon</option>
            <option value="35017">Dhamangaon</option>
            <option value="30767">Dharangaon</option>
            <option value="30831">Dharmabad</option>
            <option value="30657">Dharni</option>
            <option value="30677">Dharur</option>
            <option value="30788">Dholagarwadi</option>
            <option value="30952">Dhondewadi</option>
            <option value="30734">Dhule</option>
            <option value="31017">Digras</option>
            <option value="30968">Dodamarg</option>
            <option value="35018">Dombivli</option>
            <option value="30768">Erandol</option>
            <option value="30744">Etapalli</option>
            <option value="30741">Gadchiroli</option>
            <option value="35019">Gadhinglaj</option>
            <option value="30789">Gaganbavada</option>
            <option value="30790">Gaganbawda</option>
            <option value="30872">Gangakhed</option>
            <option value="30678">Georai</option>
            <option value="30779">Ghansawangi</option>
            <option value="31018">Ghatanji</option>
            <option value="30905">Ghera Sudhagad</option>
            <option value="30886">Gherapurandhar</option>
            <option value="30809">Godhani</option>
            <option value="30752">Gondia</option>
            <option value="30721">Gondpipri</option>
            <option value="35020">Goregaon</option>
            <option value="30887">Gorewasti</option>
            <option value="30923">Guhagar</option>
            <option value="30832">Hadgaon</option>
            <option value="30780">Harat Kheda</option>
            <option value="30791">Hatkanangale</option>
            <option value="30833">Himayatnagar</option>
            <option value="31004">Hinganghat</option>
            <option value="30810">Hingna</option>
            <option value="30757">Hingoli</option>
            <option value="30888">Indapur</option>
            <option value="30769">Jalgaon</option>
            <option value="30703">Jalgaon Jamod</option>
            <option value="30801">Jalkot</option>
            <option value="30778">Jalna</option>
            <option value="30628">Jamkhed</option>
            <option value="30935">Jath</option>
            <option value="30953">Javali</option>
            <option value="30992">Jawhar</option>
            <option value="30679">Jayakochiwadi</option>
            <option value="30874">Jintur</option>
            <option value="30722">Jiwati</option>
            <option value="30889">Junnar</option>
            <option value="30936">Kadegaon</option>
            <option value="30792">Kagal</option>
            <option value="30937">Kahanapur</option>
            <option value="30954">Kahatav</option>
            <option value="30680">Kaij</option>
            <option value="35022">Kalamb</option>
            <option value="30811">Kalameshwar</option>
            <option value="30758">Kalamnuri</option>
            <option value="30865">Kallam</option>
            <option value="30993">Kalyan</option>
            <option value="30813">Kamptee</option>
            <option value="30834">Kandhar</option>
            <option value="30969">Kankavali</option>
            <option value="30665">Kannad</option>
            <option value="30955">Karad</option>
            <option value="35023">Karanja</option>
            <option value="31005">Karanja (Ghadge)</option>
            <option value="30853">Karanjali</option>
            <option value="35024">Karjat</option>
            <option value="30978">Karmala</option>
            <option value="30979">Karmala Rural</option>
            <option value="30814">Katol</option>
            <option value="30938">Kavathe Mahankal</option>
            <option value="31019">Kelapur</option>
            <option value="35025">Khalapur</option>
            <option value="30705">Khamgaon</option>
            <option value="30939">Khanapur</option>
            <option value="30956">Khandala</option>
            <option value="127607">Kharghar</option>
            <option value="30957">Khatav</option>
            <option value="30906">Khopoli</option>
            <option value="30666">Khuldabad</option>
            <option value="30958">Kikali</option>
            <option value="30835">Kinwat</option>
            <option value="30836">Kiwat</option>
            <option value="30781">Kodgaon Ambad</option>
            <option value="30629">Kolgaon</option>
            <option value="30784">Kolhapur</option>
            <option value="30630">Kopargaon</option>
            <option value="30745">Korchi</option>
            <option value="30959">Koregaon</option>
            <option value="30723">Korpana</option>
            <option value="35027">Kudal</option>
            <option value="30793">Kudnur</option>
            <option value="30815">Kuhi</option>
            <option value="30980">Kurduwadi</option>
            <option value="30746">Kurkheda</option>
            <option value="30689">Lakhandur</option>
            <option value="30690">Lakhni</option>
            <option value="30924">Lanja</option>
            <option value="30802">Latur</option>
            <option value="30866">Lohara</option>
            <option value="30706">Lonar</option>
            <option value="30890">Lonavala</option>
            <option value="30981">Madha</option>
            <option value="30960">Mahabaleshwar</option>
            <option value="30907">Mahad</option>
            <option value="31020">Mahagaon</option>
            <option value="35028">Malegaon</option>
            <option value="30891">Malegaon Bk</option>
            <option value="30667">Malegaon Kannad</option>
            <option value="30707">Malkapur</option>
            <option value="30982">Malshiras</option>
            <option value="30970">Malvan</option>
            <option value="30892">Manchar</option>
            <option value="30925">Mandangad</option>
            <option value="30940">Mandur</option>
            <option value="30983">Mangalwedha</option>
            <option value="30908">Mangaon</option>
            <option value="31012">Mangrulpir</option>
            <option value="35030">Mantha</option>
            <option value="30875">Manwath</option>
            <option value="31021">Maregaon</option>
            <option value="30909">Matheran</option>
            <option value="30816">Mauda</option>
            <option value="30893">Mawalgaon</option>
            <option value="30708">Mehkar</option>
            <option value="30910">Mhasala</option>
            <option value="30631">Mhase</option>
            <option value="30994">Mira Bhayandar</option>
            <option value="30941">Miraj</option>
            <option value="30691">Mohadi</option>
            <option value="30724">Mohdal Bhanguda</option>
            <option value="30984">Mohol</option>
            <option value="30894">Mohopada</option>
            <option value="30995">Mokhada</option>
            <option value="30658">Morshi</option>
            <option value="30709">Motala</option>
            <option value="30837">Mudkhed</option>
            <option value="30838">Mukhed</option>
            <option value="30771">Muktainagar</option>
            <option value="30747">Mulchera</option>
            <option value="35031">Mulshi</option>
            <option value="35033">Mumbai</option>
            <option value="34404">Mumbai City</option>
            <option value="30806">Mumbai Suburban</option>
            <option value="30926">Mundhe Tarf Chiplun</option>
            <option value="30996">Murbad</option>
            <option value="30644">Murtizapur</option>
            <option value="30911">Murud</option>
            <option value="30912">Murud rural</option>
            <option value="30725">Nagbhid</option>
            <option value="30726">Nagbhir</option>
            <option value="30817">Nagpur</option>
            <option value="30839">Naigaon</option>
            <option value="35034">Nala Sopara</option>
            <option value="30826">Nanded</option>
            <option value="30659">Nandgaon Khandeshwar</option>
            <option value="30710">Nandura</option>
            <option value="30845">Nandurbar</option>
            <option value="30818">Narkhed</option>
            <option value="30852">Nashik</option>
            <option value="30846">Navapur</option>
            <option value="178600">Navi Mumbai</option>
            <option value="35035">Navi Mumbai</option>
            <option value="30895">Naygaon</option>
            <option value="30632">Newasa</option>
            <option value="30803">Nilanga</option>
            <option value="30854">Niphad</option>
            <option value="30867">Omerga</option>
            <option value="30971">Oros</option>
            <option value="30863">Osmanabad</option>
            <option value="30772">Pachora</option>
            <option value="30668">Paithan</option>
            <option value="30870">Palghar</option>
            <option value="30943">Palus</option>
            <option value="35036">Pandharpur</option>
            <option value="30794">Panhala</option>
            <option value="30944">Panumbre Tarf Shirala</option>
            <option value="30913">Panvel</option>
            <option value="35037">Paranda</option>
            <option value="30660">Paratwada</option>
            <option value="30873">Parbhani</option>
            <option value="30681">Parli</option>
            <option value="35038">Parner</option>
            <option value="30773">Parola</option>
            <option value="30735">Parsamal</option>
            <option value="30819">Parshivni</option>
            <option value="35039">Partur</option>
            <option value="30633">Pathardi</option>
            <option value="30682">Patoda</option>
            <option value="30692">Pauni</option>
            <option value="30855">Peint</option>
            <option value="30914">Pen</option>
            <option value="30856">Peth</option>
            <option value="30840">Peth Umri</option>
            <option value="30961">Phaltan</option>
            <option value="30669">Phulambri</option>
            <option value="30896">Pimpalgaon Tarf Khed</option>
            <option value="30683">Pimpri Ashti</option>
            <option value="30774">Pimpri Bk.Pr.Pachora</option>
            <option value="30897">Pimpri-Chinchwad</option>
            <option value="30915">Poladpur</option>
            <option value="30727">Pombhurna</option>
            <option value="31006">Pulgaon</option>
            <option value="30880">Pune</option>
            <option value="30876">Purna</option>
            <option value="31022">Pusad</option>
            <option value="30795">Radhanagari</option>
            <option value="30634">Rahata</option>
            <option value="30635">Rahta Pimplas</option>
            <option value="30636">Rahuri</option>
            <option value="30916">Raigad</option>
            <option value="30927">Rajapur</option>
            <option value="30898">Rajgurunagar</option>
            <option value="30728">Rajura</option>
            <option value="31023">Ralegaon</option>
            <option value="30782">Ramkheda</option>
            <option value="30820">Ramtek</option>
            <option value="30821">Ranala</option>
            <option value="30796">Ranewadi</option>
            <option value="30920">Ratnagiri</option>
            <option value="30775">Raver</option>
            <option value="30645">Risod</option>
            <option value="30917">Roha</option>
            <option value="30753">Sadak Arjuni</option>
            <option value="30693">Sakoli</option>
            <option value="30736">Sakri</option>
            <option value="30754">Salekasa</option>
            <option value="31007">Samudrapur</option>
            <option value="30928">Sangameshwar</option>
            <option value="35040">Sangamner</option>
            <option value="30942">Sangli</option>
            <option value="30986">Sangola</option>
            <option value="30711">Sangrampur</option>
            <option value="30729">Saoli</option>
            <option value="30899">Saswad</option>
            <option value="30857">Satana</option>
            <option value="30949">Satara</option>
            <option value="30822">Savner</option>
            <option value="30730">Sawali</option>
            <option value="30972">Sawantwadi</option>
            <option value="31008">Seloo</option>
            <option value="30877">Selu</option>
            <option value="30759">Sengaon</option>
            <option value="35041">Shahada</option>
            <option value="30847">Shahade</option>
            <option value="30997">Shahapur</option>
            <option value="30797">Shahuwadi</option>
            <option value="30712">Shegaon</option>
            <option value="30962">Shekhmirewadi</option>
            <option value="30637">Shevgaon</option>
            <option value="30945">Shirala</option>
            <option value="30798">Shirol</option>
            <option value="35042">Shirpur</option>
            <option value="35044">Shirur</option>
            <option value="35045">Shirur Anantpal</option>
            <option value="30963">Shirwal</option>
            <option value="30638">Shrigonda</option>
            <option value="30639">Shrirampur</option>
            <option value="30918">Shrivardhan</option>
            <option value="35050">Sillod</option>
            <option value="30731">Sindewahi</option>
            <option value="30966">Sindhudurg</option>
            <option value="30713">Sindkhed Raja</option>
            <option value="30738">Sindkheda</option>
            <option value="30858">Sinnar</option>
            <option value="35051">Sironcha</option>
            <option value="30748">Sironcha Ry.</option>
            <option value="30985">Solapur</option>
            <option value="30878">Sonpeth</option>
            <option value="30670">Soygaon</option>
            <option value="30859">Surgana</option>
            <option value="30671">Takali Ambad</option>
            <option value="30998">Talasari</option>
            <option value="30848">Taloda</option>
            <option value="30931">Talvat Khed</option>
            <option value="30932">Talvat Pal</option>
            <option value="30799">Tambale</option>
            <option value="30946">Tasgaon</option>
            <option value="30646">Telhara</option>
            <option value="30823">Tembhari</option>
            <option value="30661">Teosa</option>
            <option value="30988">Thane</option>
            <option value="30755">Tirora</option>
            <option value="30860">Trimbak</option>
            <option value="30868">Tuljapur</option>
            <option value="30694">Tumsar</option>
            <option value="30804">Udgir</option>
            <option value="31024">Umarkhed</option>
            <option value="30824">Umred</option>
            <option value="30900">Vadgaon</option>
            <option value="30973">Vaibhavwadi</option>
            <option value="30672">Vaijapur</option>
            <option value="30901">Varvand</option>
            <option value="30999">Vasai</option>
            <option value="30902">Velhe</option>
            <option value="30974">Vengurla</option>
            <option value="31000">Vikramgad</option>
            <option value="35052">Virar</option>
            <option value="31001">Wada</option>
            <option value="31002">Wadhe</option>
            <option value="30684">Wadwani</option>
            <option value="30964">Wai</option>
            <option value="30947">Walwa</option>
            <option value="31025">Wani</option>
            <option value="31009">Wardha</option>
            <option value="30732">Warora</option>
            <option value="30662">Warud</option>
            <option value="31011">Washim</option>
            <option value="31014">Yavatmal</option>
            <option value="30776">Yawal</option>
            <option value="30861">Yeola</option>
          </select>
        </div>

        <div className="col-sm-12 col-12">
          <label>
            Course <span className="required-sign">*</span>
          </label>
          <select
            name="applicant-course"
            id="tl-5-applicant-course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option className="optioooon-default" value="">
              Select Course *
            </option>
            <option className="optioooon" value="Directly">
              Directly
            </option>
            <option className="optioooon" value="College Dekho">
              College Dekho
            </option>
            <option className="optioooon" value="College Dunia">
              College Dunia
            </option>
            <option className="optioooon" value="College Chalo">
              College Chalo
            </option>
            <option className="optioooon" value="BRDS">
              BRDS
            </option>
            <option className="optioooon" value="Abhishek PU">
              Abhishek PU
            </option>
            <option className="optioooon" value="TTA Design">
              TTA Design
            </option>
          </select>
        </div>
        <div className="col-sm-6 col-12">
          <div className="captcha-box">
            <span className="captcha-text">{captcha}</span>
            <button
              type="button"
              id="captcharefreshbtn"
              className="captcha-btn"
             onClick={()=>refreshString()}
            >
              <i className="fa-solid fa-arrows-rotate"></i>
            </button>
          </div>
        </div>
        <div className="col-sm-6 col-12">
          <label>
            Enter Captcha <span className="required-sign">*</span>
          </label>
          <input
            type="text"
            name="applicant-captcha"
            id="tl-5-applicant-captcha"
            placeholder="Enter Text As shown"
            value={captchaText}
            onChange={(e) => setCaptchaText(e.target.value)}
          />
        </div>
       
        <div className="col-sm-12 col-12">
          <div className="checkbox">
            <label>
              <input type="hidden" name="agree" value="0" />
              <input
                type="checkbox"
                name="agree"
                value="1"
                id="Agree"
                checked={agree}
                className="widget_input"
                onChange={(e) => setAgree(!agree)}
              />
              <span className="agree-condition">
                <p>
                  I agree to receive information regarding my submission on
                  Sanjay Ghodawat University
                </p>
              </span>
            </label>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex justify-content-center">
            <button type="submit" className="submit-btn bg-[#f26122]">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AdmissionOpenForm;
