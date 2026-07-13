import React, { useState } from 'react';

const Studentacademic = () => {
    const baseUrl=process.env.REACT_APP_BASE_URL || '/';
    const [selectedClass, setSelectedClass] = useState("LKG");
    const [academicYear, setAcademicYear] = useState("");
    const [selectedAction, setSelectedAction] = useState("");

    const handleGenerate = () => {
        // Handle generation logic here
        console.log(`Generating: ${selectedAction}`);
    };

    return (
        <div className="page-wrapper" style={{ minHeight: '279px' }}>
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Students Academic List</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href={`${baseUrl}admin/students`}>Dashboard</a>
                                </li>
                                <li className="breadcrumb-item active">Students</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="col-md-3" style={{ float: 'right' }}>
                                <label>Select class</label>
                                <select
                                    name="selectClass"
                                    id="selectClassId"
                                    className="form-control"
                                    value={selectedClass}
                                    onChange={(e) => setSelectedClass(e.target.value)}
                                >
                                    <option>Please select class</option>
                                    <option value="KG">KG</option>
                                    <option value="LKG" selected>
                                        LKG
                                    </option>
                                    <option value="UKG">UKG</option>
                                    <option value="1">1st class</option>
                                    <option value="2">2nd class</option>
                                    <option value="3">3rd class</option>
                                    <option value="4">4th class</option>
                                    <option value="5">5th class</option>
                                    <option value="6">6th class</option>
                                    <option value="7">7th class</option>
                                    <option value="8">8th class</option>
                                    <option value="9">9th class</option>
                                    <option value="10">10th class</option>
                                    <option value="11">11th class</option>
                                    <option value="12">12th class</option>
                                </select>
                            </div>

                            <div className="col-md-3" style={{ float: 'right', marginRight: '7px' }}>
                                <div>
                                    <label>Select academic year</label>
                                    <select id="selectAcademicYear" name="academicYear" required="" class="form-control select">
                                        <option value="">Select year</option>

                                        <option value="2010">2010</option>

                                        <option value="2011">2011</option>

                                        <option value="2012">2012</option>

                                        <option value="2013">2013</option>

                                        <option value="2014">2014</option>

                                        <option value="2015">2015</option>

                                        <option value="2016">2016</option>

                                        <option value="2017">2017</option>

                                        <option value="2018">2018</option>

                                        <option value="2019">2019</option>

                                        <option value="2020">2020</option>

                                        <option value="2021">2021</option>

                                        <option value="2022">2022</option>

                                        <option value="2023">2023</option>

                                        <option value="2024" selected="">2024</option>

                                        <option value="2025">2025</option>

                                        <option value="2026">2026</option>

                                        <option value="2027">2027</option>

                                        <option value="2028">2028</option>

                                        <option value="2029">2029</option>

                                        <option value="2030">2030</option>

                                        <option value="2031">2031</option>

                                        <option value="2032">2032</option>

                                        <option value="2033">2033</option>

                                        <option value="2034">2034</option>

                                        <option value="2035">2035</option>

                                        <option value="2036">2036</option>

                                        <option value="2037">2037</option>

                                        <option value="2038">2038</option>

                                        <option value="2039">2039</option>

                                        <option value="2040">2040</option>

                                        <option value="2041">2041</option>

                                        <option value="2042">2042</option>

                                        <option value="2043">2043</option>

                                        <option value="2044">2044</option>

                                        <option value="2045">2045</option>

                                        <option value="2046">2046</option>

                                        <option value="2047">2047</option>

                                        <option value="2048">2048</option>

                                        <option value="2049">2049</option>

                                        <option value="2050">2050</option>

                                        <option value="2051">2051</option>

                                        <option value="2052">2052</option>

                                        <option value="2053">2053</option>

                                        <option value="2054">2054</option>

                                        <option value="2055">2055</option>

                                        <option value="2056">2056</option>

                                        <option value="2057">2057</option>

                                        <option value="2058">2058</option>

                                        <option value="2059">2059</option>

                                        <option value="2060">2060</option>

                                        <option value="2061">2061</option>

                                        <option value="2062">2062</option>

                                        <option value="2063">2063</option>

                                        <option value="2064">2064</option>

                                        <option value="2065">2065</option>

                                        <option value="2066">2066</option>

                                        <option value="2067">2067</option>

                                        <option value="2068">2068</option>

                                        <option value="2069">2069</option>

                                        <option value="2070">2070</option>

                                        <option value="2071">2071</option>

                                        <option value="2072">2072</option>

                                        <option value="2073">2073</option>

                                        <option value="2074">2074</option>

                                        <option value="2075">2075</option>

                                        <option value="2076">2076</option>

                                        <option value="2077">2077</option>

                                        <option value="2078">2078</option>

                                        <option value="2079">2079</option>

                                        <option value="2080">2080</option>

                                        <option value="2081">2081</option>

                                        <option value="2082">2082</option>

                                        <option value="2083">2083</option>

                                        <option value="2084">2084</option>

                                        <option value="2085">2085</option>

                                        <option value="2086">2086</option>

                                        <option value="2087">2087</option>

                                        <option value="2088">2088</option>

                                        <option value="2089">2089</option>

                                        <option value="2090">2090</option>

                                        <option value="2091">2091</option>

                                        <option value="2092">2092</option>

                                        <option value="2093">2093</option>

                                        <option value="2094">2094</option>

                                        <option value="2095">2095</option>

                                        <option value="2096">2096</option>

                                        <option value="2097">2097</option>

                                        <option value="2098">2098</option>

                                        <option value="2099">2099</option>

                                        <option value="2100">2100</option>

                                        <option value="2101">2101</option>

                                        <option value="2102">2102</option>

                                        <option value="2103">2103</option>

                                        <option value="2104">2104</option>

                                        <option value="2105">2105</option>

                                        <option value="2106">2106</option>

                                        <option value="2107">2107</option>

                                        <option value="2108">2108</option>

                                        <option value="2109">2109</option>

                                        <option value="2110">2110</option>

                                        <option value="2111">2111</option>

                                        <option value="2112">2112</option>

                                        <option value="2113">2113</option>

                                        <option value="2114">2114</option>

                                        <option value="2115">2115</option>

                                        <option value="2116">2116</option>

                                        <option value="2117">2117</option>

                                        <option value="2118">2118</option>

                                        <option value="2119">2119</option>

                                        <option value="2120">2120</option>

                                        <option value="2121">2121</option>

                                        <option value="2122">2122</option>

                                        <option value="2123">2123</option>

                                        <option value="2124">2124</option>

                                        <option value="2125">2125</option>

                                        <option value="2126">2126</option>

                                        <option value="2127">2127</option>

                                        <option value="2128">2128</option>

                                        <option value="2129">2129</option>

                                        <option value="2130">2130</option>

                                        <option value="2131">2131</option>

                                        <option value="2132">2132</option>

                                        <option value="2133">2133</option>

                                        <option value="2134">2134</option>

                                        <option value="2135">2135</option>

                                        <option value="2136">2136</option>

                                        <option value="2137">2137</option>

                                        <option value="2138">2138</option>

                                        <option value="2139">2139</option>

                                        <option value="2140">2140</option>

                                        <option value="2141">2141</option>

                                        <option value="2142">2142</option>

                                        <option value="2143">2143</option>

                                        <option value="2144">2144</option>

                                        <option value="2145">2145</option>

                                        <option value="2146">2146</option>

                                        <option value="2147">2147</option>

                                        <option value="2148">2148</option>

                                        <option value="2149">2149</option>

                                        <option value="2150">2150</option>

                                        <option value="2151">2151</option>

                                        <option value="2152">2152</option>

                                        <option value="2153">2153</option>

                                        <option value="2154">2154</option>

                                        <option value="2155">2155</option>

                                        <option value="2156">2156</option>

                                        <option value="2157">2157</option>

                                        <option value="2158">2158</option>

                                        <option value="2159">2159</option>

                                        <option value="2160">2160</option>

                                        <option value="2161">2161</option>

                                        <option value="2162">2162</option>

                                        <option value="2163">2163</option>

                                        <option value="2164">2164</option>

                                        <option value="2165">2165</option>

                                        <option value="2166">2166</option>

                                        <option value="2167">2167</option>

                                        <option value="2168">2168</option>

                                        <option value="2169">2169</option>

                                        <option value="2170">2170</option>

                                        <option value="2171">2171</option>

                                        <option value="2172">2172</option>

                                        <option value="2173">2173</option>

                                        <option value="2174">2174</option>

                                        <option value="2175">2175</option>

                                        <option value="2176">2176</option>

                                        <option value="2177">2177</option>

                                        <option value="2178">2178</option>

                                        <option value="2179">2179</option>

                                        <option value="2180">2180</option>

                                        <option value="2181">2181</option>

                                        <option value="2182">2182</option>

                                        <option value="2183">2183</option>

                                        <option value="2184">2184</option>

                                        <option value="2185">2185</option>

                                        <option value="2186">2186</option>

                                        <option value="2187">2187</option>

                                        <option value="2188">2188</option>

                                        <option value="2189">2189</option>

                                        <option value="2190">2190</option>

                                        <option value="2191">2191</option>

                                        <option value="2192">2192</option>

                                        <option value="2193">2193</option>

                                        <option value="2194">2194</option>

                                        <option value="2195">2195</option>

                                        <option value="2196">2196</option>

                                        <option value="2197">2197</option>

                                        <option value="2198">2198</option>

                                        <option value="2199">2199</option>

                                        <option value="2200">2200</option>

                                        <option value="2201">2201</option>

                                        <option value="2202">2202</option>

                                        <option value="2203">2203</option>

                                        <option value="2204">2204</option>

                                        <option value="2205">2205</option>

                                        <option value="2206">2206</option>

                                        <option value="2207">2207</option>

                                        <option value="2208">2208</option>

                                        <option value="2209">2209</option>

                                        <option value="2210">2210</option>

                                        <option value="2211">2211</option>

                                        <option value="2212">2212</option>

                                        <option value="2213">2213</option>

                                        <option value="2214">2214</option>

                                        <option value="2215">2215</option>

                                        <option value="2216">2216</option>

                                        <option value="2217">2217</option>

                                        <option value="2218">2218</option>

                                        <option value="2219">2219</option>

                                        <option value="2220">2220</option>

                                        <option value="2221">2221</option>

                                        <option value="2222">2222</option>

                                        <option value="2223">2223</option>

                                        <option value="2224">2224</option>

                                        <option value="2225">2225</option>

                                        <option value="2226">2226</option>

                                        <option value="2227">2227</option>

                                        <option value="2228">2228</option>

                                        <option value="2229">2229</option>

                                        <option value="2230">2230</option>

                                        <option value="2231">2231</option>

                                        <option value="2232">2232</option>

                                        <option value="2233">2233</option>

                                        <option value="2234">2234</option>

                                        <option value="2235">2235</option>

                                        <option value="2236">2236</option>

                                        <option value="2237">2237</option>

                                        <option value="2238">2238</option>

                                        <option value="2239">2239</option>

                                        <option value="2240">2240</option>

                                        <option value="2241">2241</option>

                                        <option value="2242">2242</option>

                                        <option value="2243">2243</option>

                                        <option value="2244">2244</option>

                                        <option value="2245">2245</option>

                                        <option value="2246">2246</option>

                                        <option value="2247">2247</option>

                                        <option value="2248">2248</option>

                                        <option value="2249">2249</option>

                                        <option value="2250">2250</option>


                                    </select>
                                </div>
                            </div>

                            <div className="col-md-3" style={{ float: 'right', marginRight: '7px' }}>
                                <div>
                                    <label>Select Action for Generate</label>
                                    <select
                                        name="selectActionForAll"
                                        required
                                        className="form-control select"
                                        value={selectedAction}
                                        onChange={(e) => setSelectedAction(e.target.value)}
                                    >
                                        <option value="">Select action</option>
                                        <option value="gen_admit_card">Generate admit card</option>
                                        <option value="gen_half_year_results">Generate half year results</option>
                                        <option value="yearly_results">Generate yearly results</option>
                                        <option value="pending_fees_students_list">Generate pending fees list of students</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-2" style={{ float: 'right', marginRight: '7px' }}>
                                <div style={{ paddingTop: '32px' }}>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleGenerate}
                                    >
                                        Generate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-bordered table-center mb-0">
                                        <thead>
                                            <tr role="row">
                                                <th>Action</th>
                                                <th>GR No</th>
                                                <th>Name</th>
                                                <th>Class</th>
                                                <th>Total Paid Fees</th>
                                                <th>Pending Fees Till (Month)</th>
                                                <th>Total Pending Fees</th>
                                                <th>Admission + Exam Fees</th>
                                                <th>Transport Fees</th>
                                                <th>Academic Year</th>
                                                <th>DOB</th>
                                                <th>Previous Year Fees</th>
                                                <th>Current Year Fees</th>
                                                <th>Parent Name</th>
                                                <th>Parent Mobile</th>
                                                <th>Reg date this academic</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="odd">
                                                <td colSpan="16" className="dataTables_empty">
                                                    No data available in table
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p>Copyright © 2022 Gayatri Gurukul Public School.</p>
            </footer>
        </div>
    );
};

export default Studentacademic;
