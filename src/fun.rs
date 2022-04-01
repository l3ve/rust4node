#[napi]
pub fn add(str: String) -> String {
    let txt = str + "input + 2";
    txt
} 