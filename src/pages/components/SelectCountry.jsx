import React from 'react'

export default function SelectCountry() {
    return (
        <>
            <select id="hs-scroll-to-selected" data-hs-select='{
  "hasSearch": true,
  "searchLimit": 5,
  "searchPlaceholder": "Search...",
  "searchClasses": "block w-full sm:text-sm bg-transparent border-layer-line rounded-lg text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus before:absolute before:inset-0 before:z-1 py-1.5 sm:py-2 px-3",
  "searchWrapperClasses": "bg-select p-2 -mx-1 sticky top-0",
  "placeholder": "Select country...",
  "scrollToSelected": true,
  "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span class=\"me-2\" data-icon></span><span class=\"text-foreground\" data-title></span></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 ps-4 pe-9 flex text-nowrap w-full cursor-pointer bg-layer border border-layer-line text-layer-foreground rounded-lg text-start text-sm hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus",
  "dropdownClasses": "mt-2 max-h-72 pb-1 px-1 space-y-0.5 z-20 w-full bg-select border border-select-line rounded-lg shadow-xl overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb",
  "optionClasses": "hs-selected:bg-select-item-active py-2 px-4 w-full text-sm text-select-item-foreground cursor-pointer hover:bg-select-item-hover rounded-lg focus:outline-hidden focus:bg-select-item-focus",
  "optionTemplate": "<div><div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div class=\"text-foreground\" data-title></div></div></div>",
  "extraMarkup": "<div class=\"absolute top-1/2 inset-e-3 -translate-y-1/2\"><svg class=\"shrink-0 size-3.5 text-muted-foreground-1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
}' class="hidden">
                <option value="">Choose</option>
                <option value="AF" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/af.png\" alt=\"Afghanistan\" />"}'>
                    Afghanistan
                </option>
                <option value="AX" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ax.png\" alt=\"Aland Islands\" />"}'>
                    Aland Islands
                </option>
                <option value="AL" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/al.png\" alt=\"Albania\" />"}'>
                    Albania
                </option>
                <option value="DZ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/dz.png\" alt=\"Algeria\" />"}'>
                    Algeria
                </option>
                <option value="AS" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/as.png\" alt=\"American Samoa\" />"}'>
                    American Samoa
                </option>
                <option value="AD" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ad.png\" alt=\"Andorra\" />"}'>
                    Andorra
                </option>
                <option value="AO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ao.png\" alt=\"Angola\" />"}'>
                    Angola
                </option>
                <option value="AI" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ai.png\" alt=\"Anguilla\" />"}'>
                    Anguilla
                </option>
                <option value="AG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ag.png\" alt=\"Antigua and Barbuda\" />"}'>
                    Antigua and Barbuda
                </option>
                <option value="AR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ar.png\" alt=\"Argentina\" />"}'>
                    Argentina
                </option>
                <option value="AM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/am.png\" alt=\"Armenia\" />"}'>
                    Armenia
                </option>
                <option value="AW" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/aw.png\" alt=\"Aruba\" />"}'>
                    Aruba
                </option>
                <option value="AU" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/au.png\" alt=\"Australia\" />"}'>
                    Australia
                </option>
                <option value="AT" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/at.png\" alt=\"Austria\" />"}'>
                    Austria
                </option>
                <option value="AZ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/az.png\" alt=\"Azerbaijan\" />"}'>
                    Azerbaijan
                </option>
                <option value="BS" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bs.png\" alt=\"Bahamas\" />"}'>
                    Bahamas
                </option>
                <option value="BH" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bh.png\" alt=\"Bahrain\" />"}'>
                    Bahrain
                </option>
                <option value="BD" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bd.png\" alt=\"Bangladesh\" />"}'>
                    Bangladesh
                </option>
                <option value="BB" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bb.png\" alt=\"Barbados\" />"}'>
                    Barbados
                </option>
                <option value="BY" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/by.png\" alt=\"Belarus\" />"}'>
                    Belarus
                </option>
                <option value="BE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/be.png\" alt=\"Belgium\" />"}'>
                    Belgium
                </option>
                <option value="BZ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bz.png\" alt=\"Belize\" />"}'>
                    Belize
                </option>
                <option value="BJ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bj.png\" alt=\"Benin\" />"}'>
                    Benin
                </option>
                <option value="BM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bm.png\" alt=\"Bermuda\" />"}'>
                    Bermuda
                </option>
                <option value="BT" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bt.png\" alt=\"Bhutan\" />"}'>
                    Bhutan
                </option>
                <option value="BO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bo.png\" alt=\"Bolivia (Plurinational State of)\" />"}'>
                    Bolivia (Plurinational State of)
                </option>
                <option value="BQ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bq.png\" alt=\"Bonaire, Sint Eustatius and Saba\" />"}'>
                    Bonaire, Sint Eustatius and Saba
                </option>
                <option value="BA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ba.png\" alt=\"Bosnia and Herzegovina\" />"}'>
                    Bosnia and Herzegovina
                </option>
                <option value="BW" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bw.png\" alt=\"Botswana\" />"}'>
                    Botswana
                </option>
                <option value="BR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/br.png\" alt=\"Brazil\" />"}'>
                    Brazil
                </option>
                <option value="IO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/io.png\" alt=\"British Indian Ocean Territory\" />"}'>
                    British Indian Ocean Territory
                </option>
                <option value="BN" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bn.png\" alt=\"Brunei Darussalam\" />"}'>
                    Brunei Darussalam
                </option>
                <option value="BG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bg.png\" alt=\"Bulgaria\" />"}'>
                    Bulgaria
                </option>
                <option value="BF" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bf.png\" alt=\"Burkina Faso\" />"}'>
                    Burkina Faso
                </option>
                <option value="BI" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bi.png\" alt=\"Burundi\" />"}'>
                    Burundi
                </option>
                <option value="CV" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cv.png\" alt=\"Cabo Verde\" />"}'>
                    Cabo Verde
                </option>
                <option value="KH" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/kh.png\" alt=\"Cambodia\" />"}'>
                    Cambodia
                </option>
                <option value="CM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cm.png\" alt=\"Cameroon\" />"}'>
                    Cameroon
                </option>
                <option value="CA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ca.png\" alt=\"Canada\" />"}'>
                    Canada
                </option>
                <option value="KY" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ky.png\" alt=\"Cayman Islands\" />"}'>
                    Cayman Islands
                </option>
                <option value="CF" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cf.png\" alt=\"Central African Republic\" />"}'>
                    Central African Republic
                </option>
                <option value="TD" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/td.png\" alt=\"Chad\" />"}'>
                    Chad
                </option>
                <option value="CL" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cl.png\" alt=\"Chile\" />"}'>
                    Chile
                </option>
                <option value="CN" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cn.png\" alt=\"China\" />"}'>
                    China
                </option>
                <option value="CX" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cx.png\" alt=\"Christmas Island\" />"}'>
                    Christmas Island
                </option>
                <option value="CC" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cc.png\" alt=\"Cocos (Keeling) Islands\" />"}'>
                    Cocos (Keeling) Islands
                </option>
                <option value="CO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/co.png\" alt=\"Colombia\" />"}'>
                    Colombia
                </option>
                <option value="KM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/km.png\" alt=\"Comoros\" />"}'>
                    Comoros
                </option>
                <option value="CK" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ck.png\" alt=\"Cook Islands\" />"}'>
                    Cook Islands
                </option>
                <option value="CR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cr.png\" alt=\"Costa Rica\" />"}'>
                    Costa Rica
                </option>
                <option value="HR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/hr.png\" alt=\"Croatia\" />"}'>
                    Croatia
                </option>
                <option value="CU" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cu.png\" alt=\"Cuba\" />"}'>
                    Cuba
                </option>
                <option value="CW" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cw.png\" alt=\"Curaçao\" />"}'>
                    Curaçao
                </option>
                <option value="CY" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cy.png\" alt=\"Cyprus\" />"}'>
                    Cyprus
                </option>
                <option value="CZ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cz.png\" alt=\"Czech Republic\" />"}'>
                    Czech Republic
                </option>
                <option value="CI" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ci.png\" alt=\"Côte Ivoire\" />"}'>
                    Côte Ivoire
                </option>
                <option value="CD" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cd.png\" alt=\"Democratic Republic of the Congo\" />"}'>
                    Democratic Republic of the Congo
                </option>
                <option value="DK" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/dk.png\" alt=\"Denmark\" />"}'>
                    Denmark
                </option>
                <option value="DJ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/dj.png\" alt=\"Djibouti\" />"}'>
                    Djibouti
                </option>
                <option value="DM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/dm.png\" alt=\"Dominica\" />"}'>
                    Dominica
                </option>
                <option value="DO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/do.png\" alt=\"Dominican Republic\" />"}'>
                    Dominican Republic
                </option>
                <option value="EC" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ec.png\" alt=\"Ecuador\" />"}'>
                    Ecuador
                </option>
                <option value="EG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/eg.png\" alt=\"Egypt\" />"}'>
                    Egypt
                </option>
                <option value="SV" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sv.png\" alt=\"El Salvador\" />"}'>
                    El Salvador
                </option>
                <option value="GB-ENG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gb.png\" alt=\"England\" />"}'>
                    England
                </option>
                <option value="GQ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gq.png\" alt=\"Equatorial Guinea\" />"}'>
                    Equatorial Guinea
                </option>
                <option value="ER" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/er.png\" alt=\"Eritrea\" />"}'>
                    Eritrea
                </option>
                <option value="EE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ee.png\" alt=\"Estonia\" />"}'>
                    Estonia
                </option>
                <option value="ET" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/et.png\" alt=\"Ethiopia\" />"}'>
                    Ethiopia
                </option>
                <option value="FK" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/fk.png\" alt=\"Falkland Islands\" />"}'>
                    Falkland Islands
                </option>
                <option value="FO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/fo.png\" alt=\"Faroe Islands\" />"}'>
                    Faroe Islands
                </option>
                <option value="FM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/fm.png\" alt=\"Federated States of Micronesia\" />"}'>
                    Federated States of Micronesia
                </option>
                <option value="FJ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/fj.png\" alt=\"Fiji\" />"}'>
                    Fiji
                </option>
                <option value="FI" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/fi.png\" alt=\"Finland\" />"}'>
                    Finland
                </option>
                <option value="FR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/fr.png\" alt=\"France\" />"}'>
                    France
                </option>
                <option value="GF" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gf.png\" alt=\"French Guiana\" />"}'>
                    French Guiana
                </option>
                <option value="PF" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/pf.png\" alt=\"French Polynesia\" />"}'>
                    French Polynesia
                </option>
                <option value="TF" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tf.png\" alt=\"French Southern Territories\" />"}'>
                    French Southern Territories
                </option>
                <option value="GA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ga.png\" alt=\"Gabon\" />"}'>
                    Gabon
                </option>
                <option value="GM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gm.png\" alt=\"Gambia\" />"}'>
                    Gambia
                </option>
                <option value="GE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ge.png\" alt=\"Georgia\" />"}'>
                    Georgia
                </option>
                <option value="DE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/de.png\" alt=\"Germany\" />"}'>
                    Germany
                </option>
                <option value="GH" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gh.png\" alt=\"Ghana\" />"}'>
                    Ghana
                </option>
                <option value="GI" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gi.png\" alt=\"Gibraltar\" />"}'>
                    Gibraltar
                </option>
                <option value="GR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gr.png\" alt=\"Greece\" />"}'>
                    Greece
                </option>
                <option value="GL" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gl.png\" alt=\"Greenland\" />"}'>
                    Greenland
                </option>
                <option value="GD" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gd.png\" alt=\"Grenada\" />"}'>
                    Grenada
                </option>
                <option value="GP" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gp.png\" alt=\"Guadeloupe\" />"}'>
                    Guadeloupe
                </option>
                <option value="GU" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gu.png\" alt=\"Guam\" />"}'>
                    Guam
                </option>
                <option value="GT" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gt.png\" alt=\"Guatemala\" />"}'>
                    Guatemala
                </option>
                <option value="GG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gg.png\" alt=\"Guernsey\" />"}'>
                    Guernsey
                </option>
                <option value="GN" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gn.png\" alt=\"Guinea\" />"}'>
                    Guinea
                </option>
                <option value="GW" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gw.png\" alt=\"Guinea-Bissau\" />"}'>
                    Guinea-Bissau
                </option>
                <option value="GY" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gy.png\" alt=\"Guyana\" />"}'>
                    Guyana
                </option>
                <option value="HT" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ht.png\" alt=\"Haiti\" />"}'>
                    Haiti
                </option>
                <option value="VA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/va.png\" alt=\"Holy See\" />"}'>
                    Holy See
                </option>
                <option value="HN" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/hn.png\" alt=\"Honduras\" />"}'>
                    Honduras
                </option>
                <option value="HK" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/hk.png\" alt=\"Hong Kong\" />"}'>
                    Hong Kong
                </option>
                <option value="HU" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/hu.png\" alt=\"Hungary\" />"}'>
                    Hungary
                </option>
                <option value="IS" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/is.png\" alt=\"Iceland\" />"}'>
                    Iceland
                </option>
                <option value="IN" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/in.png\" alt=\"India\" />"}'>
                    India
                </option>
                <option value="ID" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/id.png\" alt=\"Indonesia\" />"}'>
                    Indonesia
                </option>
                <option value="IR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ir.png\" alt=\"Iran (Islamic Republic of)\" />"}'>
                    Iran (Islamic Republic of)
                </option>
                <option value="IQ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/iq.png\" alt=\"Iraq\" />"}'>
                    Iraq
                </option>
                <option value="IE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ie.png\" alt=\"Ireland\" />"}'>
                    Ireland
                </option>
                <option value="IM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/im.png\" alt=\"Isle of Man\" />"}'>
                    Isle of Man
                </option>
                <option value="IL" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/il.png\" alt=\"Israel\" />"}'>
                    Israel
                </option>
                <option value="IT" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/it.png\" alt=\"Italy\" />"}'>
                    Italy
                </option>
                <option value="JM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/jm.png\" alt=\"Jamaica\" />"}'>
                    Jamaica
                </option>
                <option value="JP" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/jp.png\" alt=\"Japan\" />"}'>
                    Japan
                </option>
                <option value="JE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/je.png\" alt=\"Jersey\" />"}'>
                    Jersey
                </option>
                <option value="JO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/jo.png\" alt=\"Jordan\" />"}'>
                    Jordan
                </option>
                <option value="KZ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/kz.png\" alt=\"Kazakhstan\" />"}'>
                    Kazakhstan
                </option>
                <option value="KE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ke.png\" alt=\"Kenya\" />"}'>
                    Kenya
                </option>
                <option value="KI" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ki.png\" alt=\"Kiribati\" />"}'>
                    Kiribati
                </option>
                <option value="KW" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/kw.png\" alt=\"Kuwait\" />"}'>
                    Kuwait
                </option>
                <option value="KG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/kg.png\" alt=\"Kyrgyzstan\" />"}'>
                    Kyrgyzstan
                </option>
                <option value="LA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/la.png\" alt=\"Laos\" />"}'>
                    Laos
                </option>
                <option value="LV" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/lv.png\" alt=\"Latvia\" />"}'>
                    Latvia
                </option>
                <option value="LB" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/lb.png\" alt=\"Lebanon\" />"}'>
                    Lebanon
                </option>
                <option value="LS" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ls.png\" alt=\"Lesotho\" />"}'>
                    Lesotho
                </option>
                <option value="LR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/lr.png\" alt=\"Liberia\" />"}'>
                    Liberia
                </option>
                <option value="LY" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ly.png\" alt=\"Libya\" />"}'>
                    Libya
                </option>
                <option value="LI" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/li.png\" alt=\"Liechtenstein\" />"}'>
                    Liechtenstein
                </option>
                <option value="LT" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/lt.png\" alt=\"Lithuania\" />"}'>
                    Lithuania
                </option>
                <option value="LU" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/lu.png\" alt=\"Luxembourg\" />"}'>
                    Luxembourg
                </option>
                <option value="MO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mo.png\" alt=\"Macau\" />"}'>
                    Macau
                </option>
                <option value="MG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mg.png\" alt=\"Madagascar\" />"}'>
                    Madagascar
                </option>
                <option value="MW" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mw.png\" alt=\"Malawi\" />"}'>
                    Malawi
                </option>
                <option value="MY" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/my.png\" alt=\"Malaysia\" />"}'>
                    Malaysia
                </option>
                <option value="MV" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mv.png\" alt=\"Maldives\" />"}'>
                    Maldives
                </option>
                <option value="ML" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ml.png\" alt=\"Mali\" />"}'>
                    Mali
                </option>
                <option value="MT" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mt.png\" alt=\"Malta\" />"}'>
                    Malta
                </option>
                <option value="MH" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mh.png\" alt=\"Marshall Islands\" />"}'>
                    Marshall Islands
                </option>
                <option value="MQ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mq.png\" alt=\"Martinique\" />"}'>
                    Martinique
                </option>
                <option value="MR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mr.png\" alt=\"Mauritania\" />"}'>
                    Mauritania
                </option>
                <option value="MU" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mu.png\" alt=\"Mauritius\" />"}'>
                    Mauritius
                </option>
                <option value="YT" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/yt.png\" alt=\"Mayotte\" />"}'>
                    Mayotte
                </option>
                <option value="MX" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mx.png\" alt=\"Mexico\" />"}'>
                    Mexico
                </option>
                <option value="MD" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/md.png\" alt=\"Moldova\" />"}'>
                    Moldova
                </option>
                <option value="MC" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mc.png\" alt=\"Monaco\" />"}'>
                    Monaco
                </option>
                <option value="MN" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mn.png\" alt=\"Mongolia\" />"}'>
                    Mongolia
                </option>
                <option value="ME" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/me.png\" alt=\"Montenegro\" />"}'>
                    Montenegro
                </option>
                <option value="MS" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ms.png\" alt=\"Montserrat\" />"}'>
                    Montserrat
                </option>
                <option value="MA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ma.png\" alt=\"Morocco\" />"}'>
                    Morocco
                </option>
                <option value="MZ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mz.png\" alt=\"Mozambique\" />"}'>
                    Mozambique
                </option>
                <option value="MM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mm.png\" alt=\"Myanmar\" />"}'>
                    Myanmar
                </option>
                <option value="NA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/na.png\" alt=\"Namibia\" />"}'>
                    Namibia
                </option>
                <option value="NR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/nr.png\" alt=\"Nauru\" />"}'>
                    Nauru
                </option>
                <option value="NP" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/np.png\" alt=\"Nepal\" />"}'>
                    Nepal
                </option>
                <option selected value="NL" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/nl.png\" alt=\"Netherlands\" />"}'>
                    Netherlands
                </option>
                <option value="NC" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/nc.png\" alt=\"New Caledonia\" />"}'>
                    New Caledonia
                </option>
                <option value="NZ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/nz.png\" alt=\"New Zealand\" />"}'>
                    New Zealand
                </option>
                <option value="NI" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ni.png\" alt=\"Nicaragua\" />"}'>
                    Nicaragua
                </option>
                <option value="NE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ne.png\" alt=\"Niger\" />"}'>
                    Niger
                </option>
                <option value="NG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ng.png\" alt=\"Nigeria\" />"}'>
                    Nigeria
                </option>
                <option value="NU" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/nu.png\" alt=\"Niue\" />"}'>
                    Niue
                </option>
                <option value="NF" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/nf.png\" alt=\"Norfolk Island\" />"}'>
                    Norfolk Island
                </option>
                <option value="KP" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/kp.png\" alt=\"North Korea\" />"}'>
                    North Korea
                </option>
                <option value="MK" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mk.png\" alt=\"North Macedonia\" />"}'>
                    North Macedonia
                </option>
                <option value="GB-NIR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gb.png\" alt=\"Northern Ireland\" />"}'>
                    Northern Ireland
                </option>
                <option value="MP" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mp.png\" alt=\"Northern Mariana Islands\" />"}'>
                    Northern Mariana Islands
                </option>
                <option value="NO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/no.png\" alt=\"Norway\" />"}'>
                    Norway
                </option>
                <option value="OM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/om.png\" alt=\"Oman\" />"}'>
                    Oman
                </option>
                <option value="PK" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/pk.png\" alt=\"Pakistan\" />"}'>
                    Pakistan
                </option>
                <option value="PW" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/pw.png\" alt=\"Palau\" />"}'>
                    Palau
                </option>
                <option value="PA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/pa.png\" alt=\"Panama\" />"}'>
                    Panama
                </option>
                <option value="PG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/pg.png\" alt=\"Papua New Guinea\" />"}'>
                    Papua New Guinea
                </option>
                <option value="PY" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/py.png\" alt=\"Paraguay\" />"}'>
                    Paraguay
                </option>
                <option value="PE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/pe.png\" alt=\"Peru\" />"}'>
                    Peru
                </option>
                <option value="PH" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ph.png\" alt=\"Philippines\" />"}'>
                    Philippines
                </option>
                <option value="PN" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/pn.png\" alt=\"Pitcairn\" />"}'>
                    Pitcairn
                </option>
                <option value="PL" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/pl.png\" alt=\"Poland\" />"}'>
                    Poland
                </option>
                <option value="PT" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/pt.png\" alt=\"Portugal\" />"}'>
                    Portugal
                </option>
                <option value="PR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/pr.png\" alt=\"Puerto Rico\" />"}'>
                    Puerto Rico
                </option>
                <option value="QA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/qa.png\" alt=\"Qatar\" />"}'>
                    Qatar
                </option>
                <option value="CG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/cg.png\" alt=\"Republic of the Congo\" />"}'>
                    Republic of the Congo
                </option>
                <option value="RO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ro.png\" alt=\"Romania\" />"}'>
                    Romania
                </option>
                <option value="RU" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ru.png\" alt=\"Russia\" />"}'>
                    Russia
                </option>
                <option value="RW" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/rw.png\" alt=\"Rwanda\" />"}'>
                    Rwanda
                </option>
                <option value="RE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/re.png\" alt=\"Réunion\" />"}'>
                    Réunion
                </option>
                <option value="BL" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/bl.png\" alt=\"Saint Barthélemy\" />"}'>
                    Saint Barthélemy
                </option>
                <option value="SH" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sh.png\" alt=\"Saint Helena, Ascension and Tristan da Cunha\" />"}'>
                    Saint Helena, Ascension and Tristan da Cunha
                </option>
                <option value="KN" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/kn.png\" alt=\"Saint Kitts and Nevis\" />"}'>
                    Saint Kitts and Nevis
                </option>
                <option value="LC" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/lc.png\" alt=\"Saint Lucia\" />"}'>
                    Saint Lucia
                </option>
                <option value="MF" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/mf.png\" alt=\"Saint Martin\" />"}'>
                    Saint Martin
                </option>
                <option value="PM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/pm.png\" alt=\"Saint Pierre and Miquelon\" />"}'>
                    Saint Pierre and Miquelon
                </option>
                <option value="VC" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/vc.png\" alt=\"Saint Vincent and the Grenadines\" />"}'>
                    Saint Vincent and the Grenadines
                </option>
                <option value="WS" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ws.png\" alt=\"Samoa\" />"}'>
                    Samoa
                </option>
                <option value="SM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sm.png\" alt=\"San Marino\" />"}'>
                    San Marino
                </option>
                <option value="ST" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/st.png\" alt=\"Sao Tome and Principe\" />"}'>
                    Sao Tome and Principe
                </option>
                <option value="SA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sa.png\" alt=\"Saudi Arabia\" />"}'>
                    Saudi Arabia
                </option>
                <option value="GB-SCT" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gb.png\" alt=\"Scotland\" />"}'>
                    Scotland
                </option>
                <option value="SN" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sn.png\" alt=\"Senegal\" />"}'>
                    Senegal
                </option>
                <option value="RS" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/rs.png\" alt=\"Serbia\" />"}'>
                    Serbia
                </option>
                <option value="SC" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sc.png\" alt=\"Seychelles\" />"}'>
                    Seychelles
                </option>
                <option value="SL" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sl.png\" alt=\"Sierra Leone\" />"}'>
                    Sierra Leone
                </option>
                <option value="SG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sg.png\" alt=\"Singapore\" />"}'>
                    Singapore
                </option>
                <option value="SX" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sx.png\" alt=\"Sint Maarten\" />"}'>
                    Sint Maarten
                </option>
                <option value="SK" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sk.png\" alt=\"Slovakia\" />"}'>
                    Slovakia
                </option>
                <option value="SI" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/si.png\" alt=\"Slovenia\" />"}'>
                    Slovenia
                </option>
                <option value="SB" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sb.png\" alt=\"Solomon Islands\" />"}'>
                    Solomon Islands
                </option>
                <option value="SO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/so.png\" alt=\"Somalia\" />"}'>
                    Somalia
                </option>
                <option value="ZA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/za.png\" alt=\"South Africa\" />"}'>
                    South Africa
                </option>
                <option value="GS" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gs.png\" alt=\"South Georgia and the South Sandwich Islands\" />"}'>
                    South Georgia and the South Sandwich Islands
                </option>
                <option value="KR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/kr.png\" alt=\"South Korea\" />"}'>
                    South Korea
                </option>
                <option value="SS" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ss.png\" alt=\"South Sudan\" />"}'>
                    South Sudan
                </option>
                <option value="ES" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/es.png\" alt=\"Spain\" />"}'>
                    Spain
                </option>
                <option value="LK" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/lk.png\" alt=\"Sri Lanka\" />"}'>
                    Sri Lanka
                </option>
                <option value="PS" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ps.png\" alt=\"State of Palestine\" />"}'>
                    State of Palestine
                </option>
                <option value="SD" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sd.png\" alt=\"Sudan\" />"}'>
                    Sudan
                </option>
                <option value="SR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sr.png\" alt=\"Suriname\" />"}'>
                    Suriname
                </option>
                <option value="SJ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sj.png\" alt=\"Svalbard and Jan Mayen\" />"}'>
                    Svalbard and Jan Mayen
                </option>
                <option value="SZ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sz.png\" alt=\"Swaziland\" />"}'>
                    Swaziland
                </option>
                <option value="SE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/se.png\" alt=\"Sweden\" />"}'>
                    Sweden
                </option>
                <option value="CH" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ch.png\" alt=\"Switzerland\" />"}'>
                    Switzerland
                </option>
                <option value="SY" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/sy.png\" alt=\"Syrian Arab Republic\" />"}'>
                    Syrian Arab Republic
                </option>
                <option value="TW" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tw.png\" alt=\"Taiwan\" />"}'>
                    Taiwan
                </option>
                <option value="TJ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tj.png\" alt=\"Tajikistan\" />"}'>
                    Tajikistan
                </option>
                <option value="TZ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tz.png\" alt=\"Tanzania\" />"}'>
                    Tanzania
                </option>
                <option value="TH" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/th.png\" alt=\"Thailand\" />"}'>
                    Thailand
                </option>
                <option value="TL" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tl.png\" alt=\"Timor-Leste\" />"}'>
                    Timor-Leste
                </option>
                <option value="TG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tg.png\" alt=\"Togo\" />"}'>
                    Togo
                </option>
                <option value="TK" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tk.png\" alt=\"Tokelau\" />"}'>
                    Tokelau
                </option>
                <option value="TO" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/to.png\" alt=\"Tonga\" />"}'>
                    Tonga
                </option>
                <option value="TT" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tt.png\" alt=\"Trinidad and Tobago\" />"}'>
                    Trinidad and Tobago
                </option>
                <option value="TN" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tn.png\" alt=\"Tunisia\" />"}'>
                    Tunisia
                </option>
                <option value="TR" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tr.png\" alt=\"Turkey\" />"}'>
                    Turkey
                </option>
                <option value="TM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tm.png\" alt=\"Turkmenistan\" />"}'>
                    Turkmenistan
                </option>
                <option value="TC" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tc.png\" alt=\"Turks and Caicos Islands\" />"}'>
                    Turks and Caicos Islands
                </option>
                <option value="TV" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/tv.png\" alt=\"Tuvalu\" />"}'>
                    Tuvalu
                </option>
                <option value="UG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ug.png\" alt=\"Uganda\" />"}'>
                    Uganda
                </option>
                <option value="UA" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ua.png\" alt=\"Ukraine\" />"}'>
                    Ukraine
                </option>
                <option value="AE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ae.png\" alt=\"United Arab Emirates\" />"}'>
                    United Arab Emirates
                </option>
                <option value="GB" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gb.png\" alt=\"United Kingdom\" />"}'>
                    United Kingdom
                </option>
                <option value="UM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/um.png\" alt=\"United States Minor Outlying Islands\" />"}'>
                    United States Minor Outlying Islands
                </option>
                <option value="US" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/us.png\" alt=\"United States of America\" />"}'>
                    United States of America
                </option>
                <option value="UY" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/uy.png\" alt=\"Uruguay\" />"}'>
                    Uruguay
                </option>
                <option value="UZ" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/uz.png\" alt=\"Uzbekistan\" />"}'>
                    Uzbekistan
                </option>
                <option value="VU" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/vu.png\" alt=\"Vanuatu\" />"}'>
                    Vanuatu
                </option>
                <option value="VE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ve.png\" alt=\"Venezuela (Bolivarian Republic of)\" />"}'>
                    Venezuela (Bolivarian Republic of)
                </option>
                <option value="VN" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/vn.png\" alt=\"Vietnam\" />"}'>
                    Vietnam
                </option>
                <option value="VG" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/vg.png\" alt=\"Virgin Islands (British)\" />"}'>
                    Virgin Islands (British)
                </option>
                <option value="VI" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/vi.png\" alt=\"Virgin Islands (U.S.)\" />"}'>
                    Virgin Islands (U.S.)
                </option>
                <option value="GB-WLS" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/gb.png\" alt=\"Wales\" />"}'>
                    Wales
                </option>
                <option value="WF" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/wf.png\" alt=\"Wallis and Futuna\" />"}'>
                    Wallis and Futuna
                </option>
                <option value="EH" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/eh.png\" alt=\"Western Sahara\" />"}'>
                    Western Sahara
                </option>
                <option value="YE" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/ye.png\" alt=\"Yemen\" />"}'>
                    Yemen
                </option>
                <option value="ZM" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/zm.png\" alt=\"Zambia\" />"}'>
                    Zambia
                </option>
                <option value="ZW" data-hs-select-option='{"icon": "<img class=\"inline-block size-4 rounded-full\" src=\"https://flagcdn.com/w20/zw.png\" alt=\"Zimbabwe\" />"}'>
                    Zimbabwe
                </option>
            </select>
        </>
    )
}
